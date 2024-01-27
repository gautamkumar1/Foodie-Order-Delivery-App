
// import { useState } from "react";

// const Section = ({ title, description, isVisible, setIsVisible }) => {
//     return (
//         <div className="border border-black p-2 m-2">
//             <h3 className="font-bold text-xl">{title}</h3>
//             {isVisible ? (
//                 <button
//                     onClick={() => setIsVisible(false)}
//                     className="cursor-pointer underline"
//                 >

//                 </button>
//             ) : (
//                 <button
//                     onClick={() => setIsVisible(true)}
//                     className="cursor-pointer underline"
//                 >Show
//                 </button>
//             )}
//             {isVisible && <p> {description}</p>}
//         </div>

//     )
// };
// const Instamart = () => {
//     const [visibleSection, setIsVisibleSection] = useState("Team");
//     return (
//         <div>
//             <h1 className='text-3xl p-2 m-2 font-bold'>InstaMart</h1>
//             <Section
//                 title={"About"}
//                 description={"Gautam is a Web developer with experience in HTML, CSS, JavaScript, ReactJs,NodeJs and MongoDB. During an internship at Align Infotech, Gautam completed a responsive web application, collaborated with a team of developers, and implemented new features that improved engagement and user retention. Gautam is passionate about creating user-friendly interfaces that enhance the user experience and enjoys keeping up with the latest Web development trends and technologies and also currently looking for jobs."
//                 }
//                 isVisible={visibleSection === "about"}
//                 setIsVisible={() => setIsVisibleSection("about")}
//             />
//             <Section
//                 title={"Career"}
//                 description={""
//                 }
//                 isVisible={visibleSection === "Career"}
//                 setIsVisible={() => setIsVisibleSection("Career")}
//             />
//         </div>
//     );
// };
// export default Instamart;