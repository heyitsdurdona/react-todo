import { RefreshCcw } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex items-center gap-2'>
        <RefreshCcw className='animate-spin'/>
      Loading...
    </div>
  )
}
