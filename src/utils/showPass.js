export default function showPassword() {
  const input = this.offsetParent.children[1];
  if (input.type === 'password') {
    input.type = 'text';
  } else {
    input.type = 'password';
  }
}
