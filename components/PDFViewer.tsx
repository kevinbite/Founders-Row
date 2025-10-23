'use client'

import { useState, useEffect, useRef } from 'react'

interface PDFViewerProps {
  fileUrl: string
  onClose: () => void
}

const PDFViewer = ({ fileUrl, onClose }: PDFViewerProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pdfDocRef = useRef<any>(null)

  useEffect(() => {
    loadPDF()
  }, [fileUrl])

  useEffect(() => {
    if (pdfDocRef.current && currentPage) {
      renderPage(currentPage)
    }
  }, [currentPage])

  const loadPDF = async () => {
    try {
      setIsLoading(true)
      setError('')
      
      // Dynamically import pdfjs-dist to avoid SSR issues
      const pdfjsLib = await import('pdfjs-dist')
      
      // Set worker
      pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.mjs`

      const loadingTask = pdfjsLib.getDocument(fileUrl)
      const pdf = await loadingTask.promise
      
      pdfDocRef.current = pdf
      setTotalPages(pdf.numPages)
      setIsLoading(false)
      
      // Render first page
      renderPage(1)
    } catch (err) {
      console.error('Error loading PDF:', err)
      setError('Failed to load PDF. Please try again.')
      setIsLoading(false)
    }
  }

  const renderPage = async (pageNum: number) => {
    if (!pdfDocRef.current || !canvasRef.current) return

    try {
      const page = await pdfDocRef.current.getPage(pageNum)
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      if (!context) return

      // Calculate scale to fit viewport
      const viewport = page.getViewport({ scale: 1 })
      const containerWidth = window.innerWidth * 0.9
      const containerHeight = window.innerHeight * 0.75
      
      const scaleX = containerWidth / viewport.width
      const scaleY = containerHeight / viewport.height
      const scale = Math.min(scaleX, scaleY, 2.0) // Max scale of 2.0

      const scaledViewport = page.getViewport({ scale })

      canvas.height = scaledViewport.height
      canvas.width = scaledViewport.width

      const renderContext = {
        canvasContext: context,
        viewport: scaledViewport,
      }

      await page.render(renderContext).promise
    } catch (err) {
      console.error('Error rendering page:', err)
      setError('Failed to render page.')
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          goToPrevPage()
          break
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault()
          goToNextPage()
          break
        case 'Escape':
          e.preventDefault()
          onClose()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, totalPages, onClose])

  // Prevent right-click
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex flex-col"
      onContextMenu={handleContextMenu}
    >
      {/* Header with controls */}
      <div className="bg-neutral-900 border-b border-neutral-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-white font-cinzel text-xl">Investor Deck</h2>
          {totalPages > 0 && (
            <div className="text-white/70 text-sm font-montserrat">
              Page {currentPage} of {totalPages}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {/* Navigation Controls */}
          {totalPages > 0 && (
            <div className="flex items-center space-x-2">
              <button
                onClick={goToPrevPage}
                disabled={currentPage <= 1}
                className="px-4 py-1.5 bg-neutral-800 text-white rounded hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous page"
              >
                Previous
              </button>
              <button
                onClick={goToNextPage}
                disabled={currentPage >= totalPages}
                className="px-4 py-1.5 bg-neutral-800 text-white rounded hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next page"
              >
                Next
              </button>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white/10 text-white rounded hover:bg-white/20 transition-colors font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close viewer"
          >
            Close
          </button>
        </div>
      </div>

      {/* PDF Display Area */}
      <div className="flex-1 overflow-auto bg-neutral-800 flex items-center justify-center p-8">
        {isLoading && (
          <div className="text-white font-montserrat text-lg">Loading PDF...</div>
        )}
        
        {error && (
          <div className="text-red-400 font-montserrat text-lg">{error}</div>
        )}

        {!isLoading && !error && (
          <canvas
            ref={canvasRef}
            className="shadow-2xl"
            style={{ 
              maxWidth: '100%',
              maxHeight: '100%',
              userSelect: 'none'
            }}
          />
        )}
      </div>

      {/* Footer hint */}
      <div className="bg-neutral-900 border-t border-neutral-700 px-6 py-2 text-center">
        <p className="text-white/50 text-xs font-montserrat">
          Use arrow keys or buttons to navigate • ESC to close
        </p>
      </div>
    </div>
  )
}

export default PDFViewer
