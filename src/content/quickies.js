export const quickies = [
  {
    title: 'Make the entire document editable.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode',
    description: 'Controls whether the entire document is editable. Valid values are "on" and "off"',
    code: `document.designMode = "on" || "off";`,
  },
  {
    title: 'Destructuring arrays as objects',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
    description: 'Sort unique numbers and destruct to find the highest and lowest values in one line of code.',
    code: `
    const numbers = [1,2,20,3,55,6,7,8,2,3,72,50];
    const {0:highest, length, [length - 1]:lowest} = Array.from(new Set(numbers)).sort( (a, b) => a - b );
    // highest -> 1, lowest -> 72
    `,
  },
  {
    title: 'Get creative with React portals.',
    link: 'https://reactjs.org/docs/portals.html',
    description: 'Create a portal to another window with react',
    code: `
    function WindowPortal({ children }) {
      const [externalWindow, setExternalWindow] = useState(null);

      useEffect(() => {
        const newWindow = window.open("", "", "width=600,height=400");
        setExternalWindow(newWindow);
        return () => newWindow.close();
      }, []);
    
      if (!externalWindow) return null;
      return ReactDOM.createPortal(children, externalWindow.document.body);
    }
    `,
  },

];