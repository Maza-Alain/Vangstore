import nextId from "react-id-generator";
import tube1 from '../src/img/tubo1.png';
import tube2 from '../src/img/tubo2.png';
import tube3 from '../src/img/tubo3.png';
import tube4 from '../src/img/tubo4.png';
import tube5 from '../src/img/tubo5.png';

class ProductStored {
    /* name: any;
    brand: any;
    color: any;
    code: any;
    price: any;
    image: any;
    backg: any; */
    constructor(name, brand, color, code, price, image, backg){
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.code = code;
        this.price = price; 
        this.image = image
        this.backg = backg;
    }
}

const Product1 = new ProductStored ('Carmin', 'vanGogh', 'carmin', nextId(), 20, tube1, 'one');
const Product2 = new ProductStored ('Blue', 'vanGogh', 'blue', nextId(), 15, tube2, 'two');
const Product3 = new ProductStored ('Green', 'vanGogh', 'green', nextId(), 18, tube3, 'tree');
const Product4 = new ProductStored ('White', 'vanGogh', 'white', nextId(), 15, tube5, 'one');
const Product5 = new ProductStored ('Black', 'vanGogh', 'black', nextId(), 22, tube4, 'two');


const productList = [ Product1, Product2, Product3, Product4, Product5]
export default productList;