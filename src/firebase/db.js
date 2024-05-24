import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));

    querySnapshot.forEach((doc) => {
        return doc.data;
    });
};

export const getItemsFromCategory = async (category) => {
    const q = category ? query(collection(db, "products"), where("category", "==", category)) : collection(db, "products");
    const querySnapshot = await getDocs(q);
    const products = [];

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
    });
    return products;
};

export const getItem = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    let product = {};

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        product = { ...docSnap.data(), id: docSnap.id };
    } else {
        console.log("No existe el documento!");
    }
    return product;
};

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Documento escrito con el ID: ", docRef.id);
        return docRef

    } catch (error) {
        console.error("Error al agregar el documento: ", error);
    }
};