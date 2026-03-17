const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
        const storedBooData = JSON.parse(storedBookSTR);
        return storedBooData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
        alert("Already Exist");
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }
}

export {addToStoredDB, getStoredBook};