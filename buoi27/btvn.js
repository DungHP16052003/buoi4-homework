const categories = [
	{
		id: 1,
		name: "Chuyên mục 1",
		parent: 0,
	},
	{
		id: 2,
		name: "Chuyên mục 2",
		parent: 0,
	},
	{
		id: 3,
		name: "Chuyên mục 3",
		parent: 0,
	},
	{
		id: 4,
		name: "Chuyên mục 2.1",
		parent: 2,
	},
	{
		id: 5,
		name: "Chuyên mục 2.2",
		parent: 2,
	},
	{
		id: 6,
		name: "Chuyên mục 2.3",
		parent: 2,
	},
	{
		id: 7,
		name: "Chuyên mục 3.1",
		parent: 3,
	},
	{
		id: 8,
		name: "Chuyên mục 3.2",
		parent: 3,
	},
	{
		id: 9,
		name: "Chuyên mục 3.3",
		parent: 3,
	},
	{
		id: 10,
		name: "Chuyên mục 2.2.1",
		parent: 5,
	},
	{
		id: 11,
		name: "Chuyên mục 2.2.2",
		parent: 5,
	},
];
function convertNested(arr) {
    const map = new Map(); 
    const result = []; 

    
    arr.forEach(item => {
        const { id, name } = item; 
        map.set(id, { id, name, children: [] }); 
    });

    arr.forEach(item => {
        const node = map.get(item.id);
        if (item.parent === 0) {
            result.push(node);
        } else {
            const parent = map.get(item.parent);
            if (parent) {
                parent.children.push(node);
            }
        }
    });

    const cleanTree = (nodes) => {
        nodes.forEach(node => {
            if (node.children.length === 0) {
                delete node.children;
            } else {
                cleanTree(node.children);
            }
        });
    };

    cleanTree(result);
    return result;
}

const categoriesNested = convertNested(categories);
console.log(categoriesNested);
