export function getImage(id: string | number | undefined, type: string): string {
  switch (type) {
    case "User":
      return "";
    case "Item":
      return "/img/item/" + id + ".png";
    default:
      return "";
  }
}
export function linkTo(action: string | number, type: string): string {
  switch (type) {
    case "User":
      return "/user/" + action;
    case "Item":
      return "/shop/item/" + action;
    default:
      return "";
  }
}
