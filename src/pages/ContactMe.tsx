import { useState } from "react";

export const ContactMe = () => {
  const [,setResult] = useState("");
  const accessKey = import.meta.env.VITE_ACCESS_KEY;
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-0 sm:px-6 lg:px-8 mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="heading ">
            <h2>Contact me</h2>
          </div>

          <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-zinc-700 dark:border-gray-400">
            <form onSubmit={onSubmit}>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="hs-feedback-post-comment-name-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-zinc-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Full name"
                  name="name"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium dark:text-white"
                  
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="hs-feedback-post-comment-email-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Email address"
                  name="email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium dark:text-white"

                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="hs-feedback-post-comment-textarea-1"
                    name="message"
                    rows={3}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Leave your message here..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid w-2/3 mx-auto">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-green-500 text-white hover:bg-green-500 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
