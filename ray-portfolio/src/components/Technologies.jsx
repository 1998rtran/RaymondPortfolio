import { TbBrandNextjs } from 'react-icons/tb'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'

export default function Technologies() {
  return (
    <div>
      <h3>Technologies</h3>
      <FaReact className="reactjsicon" size={50} />
      <FaHtml5 className="htmlicon" size={50} />
      <FaCss3Alt className="cssicon" size={50} />
      <TbBrandNextjs className="nextjsicon" size={50} />
    </div>
  )
}