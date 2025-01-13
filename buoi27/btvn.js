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
// bai 2
const categories1 = [
	{
		id: 1,
		name: "Electronics",
		children: [
			{
				id: 2,
				name: "Laptops",
				children: [
					{
						id: 3,
						name: "Apple",
					},
					{
						id: 4,
						name: "Dell",
					},
				],
			},
			{
				id: 5,
				name: "Headphones",
			},
		],
	},
	{
		id: 6,
		name: "Books",
		children: [
			{
				id: 7,
				name: "Fiction",
				children: [
					{
						id: 8,
						name: "Thrillers",
					},
					{
						id: 9,
						name: "Mystery",
					},
				],
			},
			{
				id: 10,
				name: "Non-Fiction",
			},
		],
	},
];

function flattenCategories(arr, parentId = 0) {
	let flatArray = [];
	
	arr.forEach(category => {
	  const { children, ...rest } = category; 
	  flatArray.push({ ...rest, parentId });
	  
	  if (children && children.length > 0) {
		flatArray = flatArray.concat(flattenCategories(children, category.id));
	  }
	});
	
	return flatArray;
  }
  
  const result1 = flattenCategories(categories1);
  console.log(result1);
  