type Role = "admin" | "user" | "guest";

function performAction(action: string |number, role: Role) {
    if(role === "admin" && typeof action === "string") {
        console.log("Action performed successfully");
    }
}