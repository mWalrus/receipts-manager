import React from 'react'
import { v4 } from 'uuid'
import DropZone from 'react-dropzone'
import Receipt from './receipt'

export default class Receipts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileUpload: false
    }
    this.files = []
    this.testReceipt = {
      store: 'Ica Maxi Stormarknad',
      total: '473.85',
      items: [
        {
          name: 'Gurka',
          price: '10.95',
          additional: ['Rabatt: -5.80', 'Erbjudande: 3 för 20']
        },
        {
          name: 'Gurka',
          price: '10.95',
          additional: ['Rabatt: -5.80', 'Erbjudande: 3 för 20']
        },
        {
          name: 'Gurka',
          price: '10.95',
          additional: ['Rabatt: -5.80', 'Erbjudande: 3 för 20']
        },
        {
          name: 'Gurka',
          price: '10.95',
          additional: ['Rabatt: -5.80', 'Erbjudande: 3 för 20']
        },
        {
          name: 'Gurka',
          price: '10.95',
          additional: ['Rabatt: -5.80', 'Erbjudande: 3 för 20']
        },
        {
          name: 'Gurka',
          price: '10.95',
          additional: ['Rabatt: -5.80', 'Erbjudande: 3 för 20']
        }
      ]
    }
  }

  handleFiles(files) {
    for (let file in files) {
      this.files.push(files[file].name)
    }
    this.setState({ fileUpload: true })
  }

  listUploadedFiles() {
    if (this.state.fileUpload)
      return (
        <p className="file-info">
          {'Uploaded receipts: '}
          {this.files.map((file) => {
            return <span className="file-name">{file}</span>
          })}
        </p>
      )
    return null
  }

  render() {
    return (
      <div className="receipts">
        <DropZone onDrop={(acceptedFiles) => this.handleFiles(acceptedFiles)}>
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
        <div className="receipts-view">
          {this.listUploadedFiles()}
          <Receipt receipt={this.testReceipt} />
          <Receipt receipt={this.testReceipt} />
          <Receipt receipt={this.testReceipt} />
          <Receipt receipt={this.testReceipt} />
          <Receipt receipt={this.testReceipt} />
        </div>
      </div>
    )
  }
}
