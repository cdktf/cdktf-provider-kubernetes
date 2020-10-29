// https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CertificateSigningRequestConfig extends TerraformMetaArguments {
  /** Automatically approve the CertificateSigningRequest */
  readonly autoApprove?: boolean;
  /** metadata block */
  readonly metadata: CertificateSigningRequestMetadata[];
  /** spec block */
  readonly spec: CertificateSigningRequestSpec[];
  /** timeouts block */
  readonly timeouts?: CertificateSigningRequestTimeouts;
}
export interface CertificateSigningRequestMetadata {
  /** An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the certificate signing request, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface CertificateSigningRequestSpec {
  /** Base64-encoded PKCS#10 CSR data */
  readonly request: string;
  /** Requested signer for the request. It is a qualified name in the form: `scope-hostname.io/name`.If empty, it will be defaulted: 1. If it's a kubelet client certificate, it is assigned `kubernetes.io/kube-apiserver-client-kubelet`.2. If it's a kubelet serving certificate, it is assigned `kubernetes.io/kubelet-serving`.3. Otherwise, it is assigned `kubernetes.io/legacy-unknown`. Distribution of trust for signers happens out of band.You can select on this field using `spec.signerName`. */
  readonly signerName?: string;
  /** allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3
     https://tools.ietf.org/html/rfc5280#section-4.2.1.12
Valid values are:
 "signing",
 "digital signature",
 "content commitment",
 "key encipherment",
 "key agreement",
 "data encipherment",
 "cert sign",
 "crl sign",
 "encipher only",
 "decipher only",
 "any",
 "server auth",
 "client auth",
 "code signing",
 "email protection",
 "s/mime",
 "ipsec end system",
 "ipsec tunnel",
 "ipsec user",
 "timestamping",
 "ocsp signing",
 "microsoft sgc",
 "netscape sgc" */
  readonly usages?: string[];
}
export interface CertificateSigningRequestTimeouts {
  readonly create?: string;
}

// Resource

export class CertificateSigningRequest extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CertificateSigningRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_certificate_signing_request',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoApprove = config.autoApprove;
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_approve - computed: false, optional: true, required: false
  private _autoApprove?: boolean;
  public get autoApprove() {
    return this._autoApprove;
  }
  public set autoApprove(value: boolean | undefined) {
    this._autoApprove = value;
  }

  // certificate - computed: true, optional: false, required: true
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: CertificateSigningRequestMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: CertificateSigningRequestMetadata[]) {
    this._metadata = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: CertificateSigningRequestSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: CertificateSigningRequestSpec[]) {
    this._spec = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CertificateSigningRequestTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CertificateSigningRequestTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_approve: this._autoApprove,
      metadata: this._metadata,
      spec: this._spec,
      timeouts: this._timeouts,
    };
  }
}
