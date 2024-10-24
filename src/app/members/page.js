import { Card } from "../ui/cards";
import momo from '../../public/momo.jpg'

const members = [
    {title:"members/nayeon", src:momo, description:"nayeon"},
    {title:"members/jeongyeon", src:momo, description:"jeongyeon"},
    {title:"members/momo", src:momo, description:"momo"},
    {title:"members/sana", src:momo, description:"sana"},
    {title:"members/jihyo", src:momo, description:"jihyo"},
    {title:"members/mina", src:momo, description:"mina"},
    {title:"members/dahyun", src:momo, description:"dahyun"},
    {title:"members/chaeyoung", src:momo, description:"chaeyoung"},
    {title:"members/tzuyu", src:momo, description:"tzuyu"},
    
]

export default function Members(){
    return(
        <>
            {members.map((member) =>{
            return(
                <Card title={member.title} src={member.src}  description={member.description}></Card>
                );
            })}
        </>
    )
}