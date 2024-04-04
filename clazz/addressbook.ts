/* 
전화번호부 연락처 관련 타입 정의 예제
    1. 전화번호와 연락처를 관리하는 인터페이스를 정의한다. 
    2. fetchContacts(): 연락처 정보를 담고 있는 객체의 배열을 반환한다. 
    3. AddressBook 클래스: 전화번호부 조회, 검색, 추가 등을 수행한다.
    4. 출력관련 예시 코드
[q]로 시작되는 부분을 해결해주세요.
*/

interface PhoneNumberDictionary{
    //[q]인덱스 시그니처 문법으로 변경해보세요. ex. home, office 등 가능(문자열로 정의된 속성은 이름 관계없이 사용 가능)
    home: {num: number;};
    office: {num: number;};
}

//[q]name, address, phones 를 속성으로 가지는 인터페이스 Contact를 선언해보세요.
interface Contact{

}
//[q]아래 함수의 반환 타입, 속성의 타입을 지정해보세요. 
function fetchContacts() {
    const contacts = [
        {
            name: 'Kim',
            address: 'Malibu',
            phones: {
                home: { num: 11122223333 },
                office: { num: 22233334444 },
            },
        },
        {
            name: 'Lee',
            address: 'New York',
            phones: {
                home: { num: 33344445555 },
            },
        },
        {
            name: 'Ryu',
            address: 'Daegu',
            phones: {
                home: { num: 22233536666 },
                studio: { num: 12345678900 },
            },
        },
    ];

    return contacts;
}

/* class AddressBook {
    //[q]아래 속성의 타입을 지정해보세요. 
    contacts = [];
    constructor() {
        // contacts 배열을 초기화
    }
    // 연락처 정보를 출력
    printContacts() {
        console.log(this.contacts);
    }

    //[q]아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요
    findContactByName(name) {
        return this.contacts.filter(contact => contact.name === name);
    }

    findContactByAddress(address) {
        return this.contacts.filter(contact => contact.address === address);
    }

    findContactByPhone(phoneNumber, phoneType) {
        return this.contacts.filter(contact => contact.phones[phoneType]?.num === phoneNumber);
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    displayListByName() {
        return this.contacts.map(contact => contact.name);
    }

    displayListByAddress() {
        return this.contacts.map(contact => contact.address);
    }
} 

const myAddressBook = new AddressBook();


// 아래는 연락처 추가, 조회 예시 코드입니다. 참고하세요. 

console.log("초기 연락처 목록:");
myAddressBook.printContacts();

const newContact = {
    name: 'Choi',
    address: 'Seoul',
    phones: {
        mobile: { num: 1010101010 }
    }
};
myAddressBook.addContact(newContact);

console.log("새 연락처 추가 후:");
myAddressBook.printContacts();

console.log("이름으로 'Lee' 조회:");
console.log(myAddressBook.findContactByName('Lee'));

console.log("주소로 'New York' 조회:");
console.log(myAddressBook.findContactByAddress('New York'));

console.log("전화번호 1010101010 유형 'mobile'로 조회:");
console.log(myAddressBook.findContactByPhone(1010101010, 'mobile'));

console.log("전화번호부의 이름 목록:");
console.log(myAddressBook.displayListByName());

console.log("전화번호부의 주소 목록:");
console.log(myAddressBook.displayListByAddress());
*/