# Custom Plugin Test

This page will add the interactive code editor plugin

https://docusaurus.io/docs/markdown-features/code-blocks#interactive-code-editor

---

Ut consectetur eros in dui viverra consectetur. Vestibulum sed eleifend diam. Phasellus at laoreet elit. Vivamus sollicitudin interdum libero nec efficitur. In hac habitasse platea dictumst. Vivamus pellentesque ipsum at mauris aliquet viverra. Fusce elit nulla, bibendum vel augue laoreet,

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h2>It is {date.toLocaleTimeString()}.</h2>;
}
```

Vivamus sit amet condimentum enim. Sed semper facilisis risus sit amet lacinia. Integer tellus elit, dignissim a molestie vitae, aliquet sed leo. Morbi et rhoncus eros. Phasellus sed velit eget erat pellentesque bibendum. 
