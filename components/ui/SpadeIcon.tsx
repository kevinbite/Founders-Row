interface SpadeIconProps {
  className?: string
  size?: number
}

export default function SpadeIcon({ className = '', size = 24 }: SpadeIconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 2C12 2 4 10 4 14C4 16.5 6 18 8 18C9.5 18 10.5 17 11 16C11 16 11 19 8 22H16C13 19 13 16 13 16C13.5 17 14.5 18 16 18C18 18 20 16.5 20 14C20 10 12 2 12 2Z" />
    </svg>
  )
}
