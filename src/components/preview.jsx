import "./preview.css";

let Preview = () => {
	return (
		<>
			<div className="preview-container">
				<div className="preview-img-container">
					<img src="https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/-/format/auto/-/preview/3000x3000/-/quality/lighter/"></img>
				</div>
				<div className="preview-listing">
					<h2>Title</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						voluptatibus ad fugit. Maiores vero magni quisquam architecto
						doloribus, consequatur nobis ex, tenetur culpa perspiciatis
						temporibus enim dolor error ad! Iusto facere inventore, a, aliquid
						non velit excepturi harum, perspiciatis dolorem ipsa corporis
						consequuntur tempora itaque deleniti eos id doloremque magnam!
					</p>
					<button>Add to Cart</button>
				</div>
			</div>
		</>
	);
};

export default Preview;
