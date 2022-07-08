import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, getDoc, doc, query, where, addDoc, Timestamp } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAqN0Wr0ajmR_cy4o8_q2ogP-Ecr3WTTW8",
  authDomain: "curso-react-9976f.firebaseapp.com",
  projectId: "curso-react-9976f",
  storageBucket: "curso-react-9976f.appspot.com",
  messagingSenderId: "595463004278",
  appId: "1:595463004278:web:c1e98cdbde533cbab67f57"
};

const appFireBase = initializeApp(firebaseConfig);
const appFireStore = getFirestore(appFireBase)

export async function getItems(){
    const componentsCollecion = collection(appFireStore, "components")

    const componentsSnapshot = await getDocs(componentsCollecion)

    let answer = componentsSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
    })

    return answer
}

export async function getComponentsByCategory(idcategory){
    const componentsCollecion = collection(appFireStore, "components")

    const q = query(componentsCollecion, where("category", "==", idcategory))

    const componentsSnapshot = await getDocs(q)

    let answer = componentsSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })

    return answer

}

export async function getProduct(itemId){
    const docref = doc(appFireStore, "components", itemId)
    const docSnapshot = await (getDoc(docref))
    
    return {id: docSnapshot.id, ...docSnapshot.data()}
}

export async function createOrder(orderData){
    const orderCollection = collection(appFireStore, "orders")
    const date = Timestamp.now()

    const orderDataDate = {
        buyer: orderData.buyer,
        item: orderData.item,
        total: orderData.total,
        date: date
    }
    console.log("uri", orderDataDate)
    const orderCreated = await addDoc(orderCollection, orderDataDate )
    
    return orderCreated
}

export default appFireStore