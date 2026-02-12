import React from 'react'

function Moments() {
  return (
    <div>
      <div className="moments">
        <div className="images">
          <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="" />
        </div>
        <div className="content">
          <p>Elementum pharetra</p>
          <h1>tempor libero</h1>
          <p>Sollicitudin dui sem eget proin ornare ut laoreet eget. Donec a malesuada accumsan et. Et maecenas ullamcorper semper id.</p>
        </div>
      </div>
    </div>
  )
}

export default Moments

// import React, { useState } from 'react';

// function Moments() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(0);

//   const images = [
//     "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//     "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
//     "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
//   ];

//   const openModal = (index) => {
//     setCurrentImage(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div>
//       <div class="moments">
//         <div class="images">
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Moment ${index + 1}`}
//               onClick={() => openModal(index)}
//               style={{ cursor: "pointer", width: "150px", margin: "5px" }}
//             />
//           ))}
//         </div>
//         <div class="content">
//           <p>Elementum pharetra</p>
//           <h1>tempor libero</h1>
//           <p>Sollicitudin dui sem eget proin ornare ut laoreet eget. Donec a malesuada accumsan et. Et maecenas ullamcorper semper id.</p>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.8)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           <button
//             onClick={closeModal}
//             style={{ position: "absolute", top: "20px", right: "20px", fontSize: "24px", color: "white", background: "none", border: "none", cursor: "pointer" }}
//           >
//             &times;
//           </button>

//           <button
//             onClick={prevImage}
//             style={{ position: "absolute", left: "20px", fontSize: "30px", color: "white", background: "none", border: "none", cursor: "pointer" }}
//           >
//             &#10094;
//           </button>

//           <img
//             src={images[currentImage]}
//             alt={`Moment ${currentImage + 1}`}
//             style={{ maxHeight: "80%", maxWidth: "80%" }}
//           />

//           <button
//             onClick={nextImage}
//             style={{ position: "absolute", right: "20px", fontSize: "30px", color: "white", background: "none", border: "none", cursor: "pointer" }}
//           >
//             &#10095;
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Moments;
