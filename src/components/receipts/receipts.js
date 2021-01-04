import React from 'react'
import { v4 } from 'uuid'
import DropZone from 'react-dropzone'
import Receipt from './receipt'
import { tr } from './test-receipt'

export default class Receipts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileUpload: false,
      receipts: [
        {
          id: v4(),
          content: tr
        },
        {
          id: v4(),
          content: tr
        },
        {
          id: v4(),
          content: tr
        },
        {
          id: v4(),
          content: tr
        }
      ]
    }
    this.files = []
  }

  handleFiles(files) {
    for (let file in files) {
      this.files.push(files[file].name)
    }
    this.setState({ fileUpload: true, receipts: ['bruh'] })
  }

  listUploadedFiles() {
    if (!this.state.fileUpload) return null
    return (
      <p className="file-info">
        {'Uploaded receipts: '}
        {this.files.map((file) => {
          return <span className="file-name">{file}</span>
        })}
      </p>
    )
  }

  // receiptsToolbar() {
  //   if (this.state.receipts.length === 0) return null
  //   return (
  //     <div className="receipts-toolbar">
  //       <p className="toolbar-button" id="save">
  //         Save all
  //       </p>
  //       <p className="toolbar-button" id="remove">
  //         Remove all
  //       </p>
  //       <p className="toolbar-button" id="calc-total">
  //         Calculate total
  //       </p>
  //     </div>
  //   )
  // }

  removeReceipt(r) {
    let receipts = []
    for (let receipt of this.state.receipts) {
      if (receipt.id !== r.target.id) receipts.push(receipt)
    }
    this.setState({ receipts })
  }

  render() {
    return (
      <div className="receipts">
        <DropZone
          onDrop={(acceptedFiles) => this.handleFiles(acceptedFiles)}
          style={{ outline: 'none' }}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div
                  id="drop-area"
                  title="Drag n drop or click to browse files"
                >
                  +
                </div>
              </div>
            </section>
          )}
        </DropZone>
        <div className="receipts-view" id="rw">
          {this.listUploadedFiles()}
          {this.state.receipts.map((receipt) => {
            return (
              <Receipt
                receipt={receipt}
                key={v4()}
                remove={this.removeReceipt.bind(this)}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
