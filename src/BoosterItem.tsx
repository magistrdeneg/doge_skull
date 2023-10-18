function BoosterItem({ img, alt, title, boosterCost, boosterCount }: any) {
  return (
    <li className="boosters-item">
      <img src="" alt={alt} className="boostersimg" />
      <h3>{title}</h3>
      <h5>{boosterCost}</h5>
      <h3>{boosterCount}</h3>
    </li>
  );
}
export default BoosterItem;
