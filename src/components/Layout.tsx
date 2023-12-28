import { ReactNode } from 'react'
import Header from './Header'

type LayoutProp = {
  children: ReactNode
  title?: string
}
const Layout: React.FC<LayoutProp> = ({ title = "Kimem Admin", children }) => {
  return (
    <div className="w-full">
      <>
        <Header title={title} />
        <div className="w-full mt-20">
          {
            children
          }
        </div>
      </>
    </div>
  )
}

export default Layout