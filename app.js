

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"; 
import { ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { db } from "./config.js";
import { storage } from "./config.js";



let cityName = document.querySelector('.cityName');
let SelectCourse = document.querySelector('.SelectCourse');
let getName = document.querySelector('.getName')
let getFatherName = document.querySelector('.getFatherName')
let email = document.querySelector('.email')
let Phone = document.querySelector('.Phone')
let CNICNO = document.querySelector('.CNICNO')
let fatherCNICNo = document.querySelector('.fatherCNICNo')
let dateOfBirth = document.querySelector('.dateOfBirth')
let genedr= document.querySelector('.genedr');
let address = document.querySelector('.address')
let lastQalification = document.querySelector('.lastQalification')
let agree= document.querySelector('.agree');
let downloadUR;
let uploaded_image = "";
let usersId = Math.random()*9999999;
let submited = async ()=>{
  console.log(lastQalification.value)
  try {
    const docRef = await addDoc(collection(db, "users"), {
      cityName: cityName.value,
      SelectCourse: SelectCourse.value,
      getName : getName.value,
      getFatherName: getFatherName.value,
      email : email.value,
      Phone : Phone.value,
      CNICNO : CNICNO.value,
      fatherCNICNo :fatherCNICNo.value,
      dateOfBirth :dateOfBirth.value,
      genedr:genedr.value,
      address :address.value,
      lastQalification :lastQalification.value,
      agree : agree.value,
      downloadURL : downloadUR
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
    // try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //         cityName: cityName.value,
    //         SelectCourse: SelectCourse.value,
    //         getName : getName.value,
    //         getFatherName: getFatherName.value,
    //         email : email.value,
    //         Phone : Phone.value,
    //         CNICNO : CNICNO.value,
    //         fatherCNICNo :fatherCNICNo.value,
    //         dateOfBirth :dateOfBirth.value,
    //         genedr:genedr.value,
    //         address :address.value,
    //         lastQalification :lastQalification.value,
    //         agree : agree.value,
    //         downloadURL : downloadUR
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //     // localStorage.setItem('userID',docRef.id)
    //   } catch (e) {
    //     // console.error("Error adding document: ", e);
    //   }
    // console.log(Math.random()*9999999)

}
let uploadpic = document.querySelector('#uploadpic');
let upload = document.querySelector('#upload');
let hidden = document.querySelector('#hidden')
let selectImage =()=>{
    hidden.style.display ='block'
    upload.style.display= 'none'

    
    // document.querySelector('#hidden').style.display='block'
    console.log(uploadpic.files[0].name)
    let getImage = uploadpic.files[0].name
    const mountainsRef = ref(storage, `image/${getImage}`);
    const uploadTask = uploadBytesResumable(mountainsRef, uploadpic.files[0]);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':        
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      downloadUR =  downloadURL;
    });
  }
);
}
let uploadpi =document.querySelector('#uploadpic')

uploadpi.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.getElementById("hidden").style.backgroundImage = `url(${uploaded_image})`;

  });
  reader.readAsDataURL(this.files[0])
})
if(upload){
  document.querySelector('#submit').style.display ='block'
}else{
  document.querySelector('#submit').style.display='none'
}

window.submited = submited
window.selectImage = selectImage