import React, { Component } from "react";

import TablePagination from "@material-ui/core/TablePagination";

// Material UI Pagination required to be within a table to avoid errors

class Pagination extends Component {
  handleChangePage(e, page) {
    console.log("Page Change Request", e, page);
  }

  render() {
    return (
      <div className="paginationContainer">
        <table>
          <tbody>
            <tr>
              <TablePagination
                rowsPerPage={12}
                rowsPerPageOptions={[12]}
                labelRowsPerPage={"Results per page"}
                colSpan={3}
                count={100}
                page={1}
                SelectProps={{
                  native: true
                }}
                onChangePage={this.handleChangePage}
              />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Pagination;
