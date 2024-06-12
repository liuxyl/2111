export default function User (props) {
  console.log(1111);
  const { resource } = props
  const num = resource.num.read()
  console.log(num, 'num');
  return (
    <>
      <h3>User</h3>
      {num}-{Math.random()}
    </>
  )
}
