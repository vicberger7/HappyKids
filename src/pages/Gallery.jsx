import css from "./Gallery.module.css";
import img1 from "../assets/images/gallery/animators.jpeg";
import img2 from "../assets/images/gallery/bikes.png";
import img3 from "../assets/images/gallery/catGirl.png";
import img4 from "../assets/images/gallery/fingerFood.png";
import img5 from "../assets/images/gallery/girlInGame.png";
import img6 from "../assets/images/gallery/legoBoy.png";
import img7 from "../assets/images/gallery/salad.png";
import img8 from "../assets/images/gallery/people.png";
import img9 from "../assets/images/gallery/girls.png";
import img10 from "../assets/images/gallery/girlKetchup.png";

// export default function Gallery() {
//   return (
//     <div className={css.galleryContainer}>
//       <div className={css.slider}>
//         <div className={css.track}>
//           <img src={img1} alt="animators" />
//           <img src={img2} alt="bikes" />
//           <img src={img3} alt="cat girl" />
//           <img src={img4} alt="finger food" />
//           <img src={img5} alt="girl in game" />
//           <img src={img6} alt="lego boy" />
//           <img src={img7} alt="salad" />z
//           <img src={img8} alt="people" />
//           <img src={img9} alt="girls" />
//           <img src={img10} alt="girl ketchup" />
//           {/* duplicate images for seamless loop */}
//           <img src={img1} alt="animators" />
//           <img src={img2} alt="bikes" />
//           <img src={img3} alt="cat girl" />
//           <img src={img4} alt="finger food" />
//           <img src={img5} alt="girl in game" />
//           <img src={img6} alt="lego boy" />
//           <img src={img7} alt="salad" />
//           <img src={img8} alt="people" />
//           <img src={img9} alt="girls" />
//           <img src={img10} alt="girl ketchup" />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  // duplicate images for seamless loop
  const loopedImages = [...images, ...images];

  return (
    <div className={css.galleryContainer}>
      <div className={css.slider}>
        <div className={css.track}>
          {loopedImages.map((img, index) => (
            <img key={index} src={img} alt={`gallery-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}