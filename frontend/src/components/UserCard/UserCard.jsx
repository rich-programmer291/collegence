import React from 'react'
import {Card, Button} from 'react-bootstrap';

const UserCard = (item) => {
    // console.log(item.item.name);

    function handleClick(name){
        alert(`Request Sent to ${name}`);
    }
    return (
        <>
            <Card style={{ width: '18rem', textAlign:'center', height:'max-content', margin:'1rem'}}>
                <Card.Img src={item.item.imgurl} 
                style={{height:'15rem', textAlign:'center'}}/>
                <Card.Body>
                    <Card.Title><strong>{item.item.name}</strong></Card.Title>
                    <Card.Text
                    style={{textAlign:'left'}}
                    ><strong>College:</strong> {item.item.college}
                    <br/><strong>Course:</strong> {item.item.course}
                    <br/><strong>Year:</strong> {item.item.year}
                    <br/><strong>Domains:</strong> {item.item.Interest}</Card.Text>
                    <div style={{float:'inline-end'}}>
                    <Button variant="primary" style={{bottom:'1rem'}} onClick={()=>handleClick(item.item.name)}>Join</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default UserCard
