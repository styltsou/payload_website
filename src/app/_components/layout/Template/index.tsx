import { Fragment } from "react"
import { Footer } from "../Footer"

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return <Fragment>
    {children}
    {/* <Footer /> */}
  </Fragment>
}