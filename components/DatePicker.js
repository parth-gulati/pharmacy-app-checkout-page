import { Input } from "react-native-elements";

export default function DatePicker(){
    return (
        <Input label={'Invoice Date*'} placeholder='dd-mm-yyyy' labelStyle={{color: 'black', fontWeight: 'normal', fontSize: 18}} onTouchEnd={(e)=>{
            e.preventDefault()
            console.log('BAHAHA')
        }}/>
    )
}