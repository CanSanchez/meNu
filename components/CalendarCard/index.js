import React,  { useState, useRef } from 'react';
import { Card, Text, Icon, Modal, View, Layout, Input, Datepicker, Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// imports for backend
import { doc, setDoc } from "@firebase/firestore";
import { collection, getFirestore, addDoc } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const CalendarCard = ({
  placeholder="date",
  path,
  date,
  eventtitle
}) => {

  //const connect to backend
  const db = getFirestore();
  const query = collection(db, path);
  const [docs] = useCollectionData(query);
  

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  async function handleSubmit(e) {
    if (title.length > 0 && time.length > 0){
    e.preventDefault();
    console.log(title)
    await addDoc(query, { title: title, date: chosendate.toDateString(), time: time });
    alert('Reminder successfully created')
    setClose(current => !current);
    } else{
      alert("Please put a time and title")
    }
  }


  const [close, setClose] = React.useState(false);

  const handleClickClose= () => {
    setClose(current => !current);
}

  
  const [chosendate, setChosenDate] = useState(date);
  console.log(chosendate)
  
  return <Layout 
            style={{
            width:340, 
            height:300, 
            borderRadius:35, 
            alignItems:"center", 
            justifyContent: 'center',
            position:"absolute", 
            backgroundColor: '#F4C5AE',
            // borderColor: 'black',
            display: close ? 'none' : 'flex',
            flexDirection: 'column'}}>
          <Layout style={{alignSelf:'flex-end', marginRight: 20, backgroundColor: 'transparent'}}>
            <Icon name="close-outline" fill="#434343" style={{width:23, height:23 }}
            onPress={handleClickClose}
            />
          </Layout>
          <Layout style={styles.container}>
            <TextInput value={title}
                onChangeText ={ text => setTitle(text)}    size="small" placeholder='Title' style={styles.input}></TextInput>
            {/* date time picker */}
           <Datepicker
              style={styles.input}
              placeholder='Pick Date'
              date={chosendate}
              onSelect={nextDate => setChosenDate(nextDate)}
              accessoryRight={CalendarIcon}
            />
            <TextInput onChangeText ={ text => setTime(text)} accessoryRight={TimeIcon} size="small" placeholder='Time' style={styles.input}></TextInput>
            <Button style={styles.addBtn} onPress={handleSubmit}>Add</Button>
          </Layout>
            
  </Layout>
};

const styles = StyleSheet.create({
  container:{
    display:"flex", 
    width: 320,
    padding: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center' ,
    backgroundColor: 'transparent' 
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  addBtn: {
    flex:1,
    width: 150,
    // backgroundColor: '#E88C68',
    padding: 5,
    margin: 0,
    marginBottom: 0,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 10
  }
  })

//icons
const CalendarIcon = (props) => (
  <Icon {...props} name='calendar'/>
);

const TimeIcon = (props) => (
  <Icon {...props} name='clock-outline'/>
);

  // const onTimeChange = (isChecked) => {
  //   setChecked(isChecked);
  // };

  // const onRepeatChange = (isRepeat) => {
  //   setRepeat(isRepeat);
  // };

// return <Card style={{width:360, height:430, borderRadius:35, alignItems:"center", position:"absolute",
//   display: close ? 'none' : 'flex'}}>
//     <Layout style={{flex:1, flexDirection:"row"}}>
//       <Icon name="close-outline" fill="#434343" style={{width:23, height:23, }}
//       onPress={handleClickClose}
//       />
//       <Text onPress={handleClickClose} style={{paddingLeft:260}}>Add</Text>
//     </Layout>
//     <Card style={{display:"flex", width:320, height:100, borderRadius:30, backgroundColor: "#F4C5AE", marginTop:5  }}>
//       <Input size="small" placeholder='Title' style={{marginBottom:5, backgroundColor:"#ffffff", borderRadius:30}}></Input>
//       <Input size="small" placeholder='Location' style={{backgroundColor:"#ffffff", borderRadius:30}}></Input>
//     </Card>
//     <Layout style={{flex:1, flexDirection:"row", paddingTop:30, alignItems:"left"}}>      
//       <Text style={{paddingLeft:25, display:"inline"}}>All Day</Text>
//       <Toggle style={{display:"inline", paddingLeft:185}} checked={checked} onChange={onTimeChange}></Toggle>
//     </Layout>
//     <Layout style={{flex:1, flexDirection:"row", alignItems:"left"}}>
//       <Text style={{marginTop:-5, paddingLeft:25, display:"inline"}}>Starts</Text>
//       <Input size="small" placeholder={placeholder} style={{borderRadius:30, width:80, marginLeft:75, marginRight:10}}></Input>
//       <Input size="small" placeholder={placeholder} style={{borderRadius:30, width:80}}></Input>
//     </Layout>
//     <Layout style={{flex:1, flexDirection:"row", alignItems:"left"}}>
//       <Text style={{marginTop:-5, paddingLeft:25, display:"inline"}}>Ends</Text>
//       <Input size="small" placeholder={placeholder} style={{borderRadius:30, width:80, marginLeft:83, marginRight:10}}></Input>
//       <Input size="small" placeholder={placeholder} style={{borderRadius:30, width:80}}></Input>
//     </Layout>  
//     <Card style={{flex:1, flexDirection:"row", borderRadius:35, marginBottom:30}}>
//       <Text style={{}}>Repeat</Text>
//       <Toggle style={{display:"inline", paddingLeft:235, marginTop:-25}} checked={repeat} onChange={onRepeatChange} ></Toggle>
//     </Card>  
//   </Card>