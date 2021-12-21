import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./preview.css";
import { addCreator } from "../redux/actions";

let Preview = () => {
	let { id } = useParams();
	let dispatch = useDispatch();
	let state = useSelector((state) => state);

	let reqObj = state[id];
	return (
		<>
			<div className="preview-container">
				<div className="preview-img-container">
					<img src={reqObj.img}></img>
				</div>
				<div className="preview-listing">
					<h2>{reqObj.name}</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						voluptatibus ad fugit. Maiores vero magni quisquam architecto
						doloribus, consequatur nobis ex, tenetur culpa perspiciatis
						temporibus enim dolor error ad! Iusto facere inventore, a, aliquid
						non velit excepturi harum, perspiciatis dolorem ipsa corporis
						consequuntur tempora itaque deleniti eos id doloremque magnam!
					</p>
					<button
						onClick={() => {
							dispatch(addCreator(reqObj.id));
						}}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</>
	);
};

export default Preview;
