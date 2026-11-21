export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.append(element);
    }
}

export function generateTree(childrenCount, level) {
    const root = document.createElement('div');
    root.classList.add('item_1');
    function createChildren(parent, currentLevel) {
        if (currentLevel > level) {
            return;
        }
        for (let i = 0; i < childrenCount; i++) {
            const child = document.createElement('div');
            child.classList.add(`item_${currentLevel}`);
            parent.append(child);
            createChildren(child, currentLevel + 1);
        }
    }
    createChildren(root, 2);
    return root;
}

export function replaceNodes() {
    const tree = generateTree(2, 3);
    const nodes = tree.querySelectorAll('.item_2');
    nodes.forEach((node) => {
        const section = document.createElement('section');
        section.className = node.className;
        while (node.firstChild) {
            section.append(node.firstChild);
        }
        node.replaceWith(section);
    });
    return tree;
}
