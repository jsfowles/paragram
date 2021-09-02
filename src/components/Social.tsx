import { motion } from 'framer-motion';
import React from 'react';
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = (enter, exit) => ({
  hidden: {
    y: exit,
  },
  show: {
    y: enter,
  },
});

const Social = () => {
  const [onHoverZero, setOnHoverZero] = React.useState(false);
  return (
    <div className="relative text-center flex flex-col items-center">
      <motion.button
        onMouseEnter={() => setOnHoverZero(true)}
        onMouseLeave={() => setOnHoverZero(false)}
        transition={{ duration: 0.4 }}
        className=" bg-gradient-to-tr from-pink-700  to-purple-700
 overflow-hidden flex justify-center items-center flex-col"
      >
        <motion.span
          variants={container}
          initial="hidden"
          animate={onHoverZero ? 'show' : 'hide'}
          className="tracking-widest text-white flex items-center"
        >
          <motion.p
            variants={item(-40, 13)}
            transition={{ duration: 0.4 }}
            className="uppercase font-sans"
          >
            Social
          </motion.p>
          <motion.svg
            variants={item(-40, 13)}
            transition={{ duration: 0.4 }}
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </motion.svg>
        </motion.span>
        <motion.span
          variants={container}
          initial="hidden"
          animate={onHoverZero ? 'show' : 'hide'}
          className=""
        >
          <ul className="flex justify-evenly space-x-6">
            <motion.li
              variants={item(-15, 30)}
              transition={{ duration: 0.4 }}
              className=""
            >
              <a
                href="https://www.facebook.com/paragramguitars"
                target="_blank"
              >
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-white hover:text-red"
                >
                  <g clipPath="url(#prefix__clip0)">
                    <path
                      d="M3.516 24.916h7.828v-8.531H8.53v-2.813h2.813v-3.515a3.52 3.52 0 013.515-3.516h3.516v2.812h-2.813c-.775 0-1.406.631-1.406 1.407v2.812h4.092l-.469 2.813h-3.623v8.531h6.328A3.52 3.52 0 0024 21.4V4.432A3.52 3.52 0 0020.484.916H3.516A3.52 3.52 0 000 4.432V21.4a3.52 3.52 0 003.516 3.516zM1.406 4.432c0-1.164.947-2.11 2.11-2.11h16.968c1.163 0 2.11.946 2.11 2.11V21.4c0 1.163-.947 2.11-2.11 2.11h-4.922V17.79h3.409l.937-5.625h-4.346V10.76h4.22V5.135h-4.923a4.927 4.927 0 00-4.921 4.922v2.109H7.124v5.625h2.813v5.719H3.516a2.112 2.112 0 01-2.11-2.11V4.432z"
                      fill="#F2F2F3"
                    />
                  </g>
                  <defs>
                    <clipPath id="prefix__clip0">
                      <path
                        fill="#fff"
                        transform="translate(0 .916)"
                        d="M0 0h24v24H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </motion.li>

            <motion.li
              variants={item(-15, 30)}
              transition={{ duration: 0.4 }}
              className=""
            >
              <a href="https://github.com/jsfowles" target="_blank">
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-white hover:text-gray-200"
                >
                  <g clipPath="url(#prefix__clip0)">
                    <path
                      d="M18.375 24.916H5.625A5.631 5.631 0 010 19.291V6.541A5.631 5.631 0 015.625.916h12.75A5.631 5.631 0 0124 6.541v12.75a5.631 5.631 0 01-5.625 5.625zM5.625 2.791a3.754 3.754 0 00-3.75 3.75v12.75a3.754 3.754 0 003.75 3.75h12.75a3.754 3.754 0 003.75-3.75V6.541a3.754 3.754 0 00-3.75-3.75H5.625zm12.984 2.344a1.172 1.172 0 100 2.344 1.172 1.172 0 000-2.344zM12 19.01a6.1 6.1 0 01-6.094-6.094c.335-8.084 11.854-8.082 12.188 0A6.1 6.1 0 0112 19.01zm0-10.313a4.224 4.224 0 00-4.219 4.219c.232 5.597 8.207 5.595 8.438 0A4.224 4.224 0 0012 8.697z"
                      fill="#F2F2F3"
                    />
                  </g>
                  <defs>
                    <clipPath id="prefix__clip0">
                      <path
                        fill="#fff"
                        transform="translate(0 .916)"
                        d="M0 0h24v24H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </motion.li>
          </ul>
        </motion.span>
      </motion.button>
    </div>
  );
};

export default Social;
