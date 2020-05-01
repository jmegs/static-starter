// props: name: String
module.exports = (props = { name: "John" }) => `
<div>Hello from a shortcode, ${props.name}</div>
`
