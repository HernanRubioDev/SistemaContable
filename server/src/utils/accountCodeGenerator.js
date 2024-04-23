const generateMajorAccountCode = (code, account_type) =>{
  let new_code = null;
  switch (account_type) {
    case 'A':
      code.rowCount !== 0 ? new_code = String(parseInt(code.rows[0].code)+100) : new_code = '10000'
      break;

    case 'P':
      code.rowCount !== 0 ? new_code = String(parseInt(code.rows[0].code)+100) : new_code = '20000'
      break;

    case 'R+':
      code.rowCount !== 0 ? new_code = String(parseInt(code.rows[0].code)+100) : new_code = '30000'
      break;

    case 'R-':
      code.rowCount !== 0 ? new_code = String(parseInt(code.rows[0].code)+100) : new_code = '40000'
      break;

    case 'Pa':
      code.rowCount !== 0 ? new_code = String(parseInt(code.rows[0].code)+100) : new_code = '50000'
      break;
  }
  return new_code;
}

const generateMinorAccountCode = (last_minor_code, code) => {
  let new_code = null
  switch (true) {
    case last_minor_code.rowCount !==0:
      new_code = String(parseInt(last_minor_code.rows[0].code) + 1)
      break;
  
    case last_minor_code.rowCount === 0:
      new_code = String(parseInt(code)+1)
      break;
  }

  return new_code;
}

export {generateMajorAccountCode, generateMinorAccountCode}