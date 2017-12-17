const XmlElementType = {
  ELEMENT_UNKNOWN: 1,
  ELEMENT_OPENING_TAG: 2,
  ELEMENT_CLOSING_TAG: 3,
  ELEMENT_TEXT: 4
}

class XmlElement {
  constructor() {
    this.element_type = XmlElementType.ELEMENT_UNKNOWN;
    this.node_name = "";
  }
}

class XMLTokenizer {
  constructor(xml_str) {
    this.xml = xml_str;
    this.current_index = 0;
  }

  next_element(element) {
    let i = this.xml.substr(this.current_index).search('<');

    if (i === -1) {
      return false;
    }

    i += this.current_index;

    let temp = this.xml.substring(this.current_index, i);
    temp = temp.trim();

    if (temp.length !== 0) {
      element.element_type = XmlElementType.ELEMENT_TEXT;
      element.node_name = temp;
      this.current_index = i;

      return true;
    }

    let j = this.xml.substr(i).search('>');
    j += i;
    if (this.xml[i + 1] === '/') {
      element.element_type = XmlElementType.ELEMENT_CLOSING_TAG;
      element.node_name = this.xml.substring(i + 2, j);
    } else {
      element.element_type = XmlElementType.ELEMENT_OPENING_TAG;
      element.node_name = this.xml.substring(i + 1, j);
    }

    this.current_index = j + 1;
  
    return true;
  }
}

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
}

const create_xml_tree = function(xml) {
  let element = new XmlElement();
  let token = new XMLTokenizer(xml);

  if (!token.next_element(element)) {
    return null;
  }

  console.log(element.node_name);

  let stack = [];

  let root = new Node(element.node_name);
  stack.push(root);

  while(token.next_element(element)) {
    console.log(element.node_name);
    let node = new Node(element.node_name);
    if (element.element_type === XmlElementType.ELEMENT_TEXT 
      || element.element_type === XmlElementType.ELEMENT_OPENING_TAG) {
      stack[stack.length - 1].children.push(node);
    }

    if (element.element_type === XmlElementType.ELEMENT_OPENING_TAG) {
      stack.push(node);
    } else if (element.element_type === XmlElementType.ELEMENT_CLOSING_TAG) {
      stack.pop();
    }
  }
  return root;
}
const xml = `<html>
  <body>
    <div>
      <h1>CodeRust</h1>
      <a>http://coderust.com</a> 
    </div>
    <div>
        <h2>Chapter 1</h2>
    </div>
    <div>
        <h3>Chapter 2</h3>
        <h4>Chapter 2.1</h4>
    </div>
  </body>
</html>`

console.log(create_xml_tree(xml));
