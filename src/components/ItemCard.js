import Image from "next/image";
import itemImage from "../../assets/item.svg";
export default function ItemCard() {
   return (
      <div>
         <Image src={itemImage} width={100} height={100} />
         <div>
            <div>
               (BESCOM Inspected) HPL Three phase, 4 wire static watthour meter with 10-60A rating
            </div>
            <div>
               <div>
                  <div>₹4500</div>
                  <div>
                     <div className=" p-[10px] rounded-full">-</div>
                     <div>2</div>
                     <div className=" p-[10px] rounded-full">+</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
