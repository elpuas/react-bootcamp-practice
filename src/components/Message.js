import React from "react";

const Message = ({ type }) => {
  const messages = {
    saved: "Post has been saved!",
    updated: "Post has been updated!",
    deleted: "Post has been deleted."
  };
  return (
    <div className={`bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 ${type}`}>
		<div className="flex">
		<p className="font-bold">
        	<strong>{messages[type]}</strong>
      	</p>
		</div>
    </div>
  );
};

export default Message;