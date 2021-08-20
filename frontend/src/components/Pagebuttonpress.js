function Pagebuttonpress ({page, onButtonClick}) {
    //handler which captures the button click event
    function buttonClick(event) {
        // Here, we invoke the callback with the new value
        onButtonClick(event.target.value);
    }
    return (
    <button value={page} onChange={pageChange}></button>
    );
}