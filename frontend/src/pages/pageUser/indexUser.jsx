import Card from "../../components/ux/card/card"
import CardEvent from "../../components/ux/cardEvent/cardEvent"
import CardProfile from "../../components/ux/cardProfile/cardProfile"
//import Calendar from "../../components/ux/calendar/calendar"

export default function User() {
    return(
        <div>
            <CardProfile/>
            <Card/>
            <CardEvent/>
        </div>
            
    )
}