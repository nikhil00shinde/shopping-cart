import { useSelector } from "react-redux";

let Cart = () => {
	let state = useSelector((state) => state);
	let filteredArr = state.filter((el, index) => el.qty > 0);
	let total = 0;
	return (
		<>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Product Name</th>
						<th scope="col">Price</th>
						<th scope="col">Qty</th>
						<th scope="col">Amount</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{filteredArr.map((el, index) => {
						let amount = el.price * el.qty;
						total += amount;
						return (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{el.name}</td>
								<td>Rs {el.price}</td>
								<td>{el.qty}</td>
								<td>Rs {amount}</td>
								<td>
									<button>Remove</button>
								</td>
							</tr>
						);
					})}

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td>Total</td>
						<td>Rs {total}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default Cart;
