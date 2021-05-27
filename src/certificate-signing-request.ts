// https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSigningRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically approve the CertificateSigningRequest
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#auto_approve CertificateSigningRequest#auto_approve}
  */
  readonly autoApprove?: boolean;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#metadata CertificateSigningRequest#metadata}
  */
  readonly metadata: CertificateSigningRequestMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#spec CertificateSigningRequest#spec}
  */
  readonly spec: CertificateSigningRequestSpec[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#timeouts CertificateSigningRequest#timeouts}
  */
  readonly timeouts?: CertificateSigningRequestTimeouts;
}
export interface CertificateSigningRequestMetadata {
  /**
  * An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#annotations CertificateSigningRequest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#generate_name CertificateSigningRequest#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#labels CertificateSigningRequest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the certificate signing request, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#name CertificateSigningRequest#name}
  */
  readonly name?: string;
}

function certificateSigningRequestMetadataToTerraform(struct?: CertificateSigningRequestMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CertificateSigningRequestSpec {
  /**
  * Base64-encoded PKCS#10 CSR data
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#request CertificateSigningRequest#request}
  */
  readonly request: string;
  /**
  * Requested signer for the request. It is a qualified name in the form: `scope-hostname.io/name`.If empty, it will be defaulted: 1. If it's a kubelet client certificate, it is assigned `kubernetes.io/kube-apiserver-client-kubelet`.2. If it's a kubelet serving certificate, it is assigned `kubernetes.io/kubelet-serving`.3. Otherwise, it is assigned `kubernetes.io/legacy-unknown`. Distribution of trust for signers happens out of band.You can select on this field using `spec.signerName`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#signer_name CertificateSigningRequest#signer_name}
  */
  readonly signerName?: string;
  /**
  * allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3
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
 "netscape sgc"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#usages CertificateSigningRequest#usages}
  */
  readonly usages?: string[];
}

function certificateSigningRequestSpecToTerraform(struct?: CertificateSigningRequestSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request: cdktf.stringToTerraform(struct!.request),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
    usages: cdktf.listMapper(cdktf.stringToTerraform)(struct!.usages),
  }
}

export interface CertificateSigningRequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html#create CertificateSigningRequest#create}
  */
  readonly create?: string;
}

function certificateSigningRequestTimeoutsToTerraform(struct?: CertificateSigningRequestTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html kubernetes_certificate_signing_request}
*/
export class CertificateSigningRequest extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request.html kubernetes_certificate_signing_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSigningRequestConfig
  */
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
    return this.getBooleanAttribute('auto_approve');
  }
  public set autoApprove(value: boolean ) {
    this._autoApprove = value;
  }
  public resetAutoApprove() {
    this._autoApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveInput() {
    return this._autoApprove
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: CertificateSigningRequestMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: CertificateSigningRequestMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: CertificateSigningRequestSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: CertificateSigningRequestSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CertificateSigningRequestTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CertificateSigningRequestTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_approve: cdktf.booleanToTerraform(this._autoApprove),
      metadata: cdktf.listMapper(certificateSigningRequestMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(certificateSigningRequestSpecToTerraform)(this._spec),
      timeouts: certificateSigningRequestTimeoutsToTerraform(this._timeouts),
    };
  }
}
