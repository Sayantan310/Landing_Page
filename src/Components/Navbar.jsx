import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="box flex flex-row w-full h-fit text-white p-8 space-x-14 text-center items-center">
        <div className=" flex flex-row space-x-4 ml-6 items-center">
          <img
            className=" h-4"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABGdJREFUeF7tndt52zAMRslNmk2aTZpJ2kzSdJJmjz7Um7ClFcayrQt+XkT8JvSWL5RM4eiQIiDZ3j3CFsKX82l4f2I/Hc9+Auf+h/D7A8gz+/nwAwnhq3NuAuLci/P+jRnKIwD565ybhizn3p331JZwA7m2I4lBbQk7kLkdCUic2J9ZJ3heICH8+D+df1+ZL16d9/H/dBszkLARbVpLOIFs25E4UVrCB2RaBMa5Q7I9sc0ljEC25o5bSHSWcAHB7EhwqCxhA4LYQTmX8ADJs4POEiYgOXbQWcIBpMwOKktYgPx0zn2T3OdutHlz3r8UHqP57vqB1LGDxhIGILHWEWseNTb16XndQOraQWGJdiBL6fVSU1RbohfIcvGpFIb6IpZmIIgd6WmTVMrdA6c2x6UTiCy9Pg/668cfawWreduT8/5pj1iv/2sFgtmRAhyCZD/VNXd9QHA7LgHe31e1HdFKXUDw29z7AG9bEh9+eO81HEk+VxsQNIF4H+D1uzP1dugypIYd6RJctkS9HdqAoHasVwLvLVG9GJwPZTqGLNyO/QCHMM8Q05RxtQCpZ8dl2IoJyQjlF9NDc/2B4HbIV9mTJbE9zXsjGoBgxSfv+/dZcv+a2abvybW0IzMgvXfrDQQpPlGsI0qB9gNidiyy6wnE7FhA0gcIXnyS31mVjhmd9+8FRJImT6EZYu5IJ3s8kP0U+e01OowdfXJZsiLSkHYcDwS3Q3V1r8V0c+yQFcLWe4G35zfU3HH8HILbQVG/qG3JMYbgi8Ah7ThuDjE7xCK1NwS3Y7/4JD49voZHAKlffOKLs7jHbYHgdgy1CFyi1BqI2SF2Y2rYDojZAaJoD8RKsxlI2hhidmSgaGnI9KWU0vcCh10EHjOpW/Ep2442k7ql1xUBMTuKYNQ3xOxQBARPIA6/Km87qVvxqdiOekMWbseQxScJsfKFIb4ItHXHBpkaQNAEotnRDAhux9DFp/ZDFj530LxaJgleizb5QxZuB8U3urUIMnLMEiDo3GF2CMjkAcHtsEWgAEb+OuT6leP9j3rw9wL3AyBvgRtidsijm9EyB4gVnzICLd0FA2J2SOOa3Q4FYnZkh1q2oxyIFZ9kES1shQCx9wILgy3ZXQYET5E8/rpjmk+R76OPebzdb7OTAjE7li5vtGQt+H3FfSC4HeO8F4jHZnfkkACx9wK3Bv/KlmwDwa+A8YpPIcR5JD7HLN02LVkHgi8Cxy3NYpZEcKuZ7y0gll6XXvMV12jLQHA7rDSLZsBXLFkDYnZI7UjtKllyDwS3Y/dWDj032vYVLFkCYnbkXhHTxRwTsNm/Y3INxOzIRXHZr9CSWyBIej12Qv3vApZHGD5CtEPywzLpwFdP41yA4HbAPbUdViPwuS6ZA0HtsPjWi8DnsmECgt+y1euKHSlF4GxJAoKk1y2EbSJwtsQ7PIHYpjt21PNNUgRidui5GE4RCFLv0NP1B+2JAVEG1oAYEGURUNadaMgfZX0aujv/AHxY4HwgCT+rAAAAAElFTkSuQmCC"
            alt=""
          />
          <div>Borcelle</div>
        </div>
        <div className=" flex flex-row items-center space-x-10 pl-[750px]">
          <div>Home</div>
          <div>Photo</div>
          <div>About Us</div>
          <div>Contact</div>
          <div
            className="rotate-[178deg]"
            style={{ position: "absolute", right: 2 }}
          >
            <img
              className=" h-24"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAllJREFUeF7t3MlRw0AQQNGeTAjFoZhIMJFgIoFMcCaiBjDgVdssvXxV6aLLtObp66RSknwMw0ZE8nmQlPZf1zi67ECSYdiKyMu/1Z8lpV2XaVhUMsiHiDyc7QUonR6ODDLcWBuUDij3QPI4oDRGGQMBRSEIKA1RphRyHIfXVwOYOSCUohAElMoocwvh9aUUhFIqwSwthFKUglBKYZi1hVCKUhBKKQRTqhBKUQpCKSthShdCKUpBKGUhTK1CKEUpCKXMhKldCKUoBaGUiTCtCqEUpSCUMgLTuhBKUQpCKTdgehVCKUpBKOUMpnchlKIUhFJ+YLQUQilKQcKXoq2Q8KVoBQlbimaQkCjaQcKhWAAJhWIFJAyKJZAQKNZA3KNYBHGNYhXELYplEJco1kHcoXgAcYXiBcQNiicQFyjeQMyjeAQxjeIVxCyKZxCTKN5BzKFEADGFEgXEDEokEBMo0UDUo0QEUY0SFUQtSmQQlSjRQdShAPL9NbGaX+ACcvy8WwkKIH8gKkoB5BSkOwoglyBdUQC5DtINBZDbIF1QALkP0hwFkHGQpiiATANphgLIdJAmKIDMA6mOAsh8kKoogCwDqYYCyHKQKiiArAMpjgLIepCiKICUASmGAkg5kCIogJQFWY0CSHmQVSiA1AFZjAJIPZBFKIDUBZmNAkh9kFkogLQBmYwCSDuQSSiAtAUZRQGkPchdFED6gNxEAaQfyFUUQPqCXKAA0h/kBAUQHSC/KIDoAcmTPAKiC+Q9g7yJyEbXXGGn2WeQBxF5EpFt2G3of+MHEXmVlHaf8XyQLLuI6CgAAAAASUVORK5CYII="
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
