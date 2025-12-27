import {AdminComponent} from "@repo/ui/admin"
import {InputBox} from "@repo/ui/inputBox"

export default function Admin(){

    return <div>
        Hi there form admin page
        <AdminComponent>
            Admin
        </AdminComponent>

        <InputBox></InputBox>
    </div>
}