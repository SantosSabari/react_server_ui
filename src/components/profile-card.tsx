// import React from 'react'
// import { ThemeContext } from '../App';



// interface ChildProps {
//   onMessageChange: (message: string) => void;
// }
// function ProfileCard(props:any) {
  
//  console.log(props)
//  const profile = props.profile;
//  const sendMessageToParent = () => {
//   props.onMessageChange('this is from child')
// };

//   return (
//     <>

// <ThemeContext.Consumer>
//  {
//   (theme) => (
//     profile ? (
//       <div className={`max-w-sm mx-auto bg-${theme} shadow-lg rounded-lg overflow-hidden`}>
//            <div className="flex items-center justify-center bg-gray-300 h-32">
//                <img className="h-24 w-24 rounded-full" src={profile.profilePic} alt={`${profile.firstName} ${profile.lastName}`} />
//            </div>
//            <div className="p-6">
//                <h2 className="text-center text-xl font-semibold text-gray-800">{profile.firstName} {profile.lastName}</h2>
//                <p className="text-center text-gray-600">{profile.email}</p>
//                <p className="text-center text-gray-600">{profile.phoneNumber}</p>
//                <button onClick={sendMessageToParent}>Click CHild Component</button>
//            </div>
//        </div> )
//       : <div>No Data to display</div>
     
//   )
//  }


      
//       </ThemeContext.Consumer>
//     </>
//   )
// }

// export default ProfileCard;

import React from 'react'

function ProfileCard() {
  return (
    <div>profile-card</div>
  )
}

export default ProfileCard