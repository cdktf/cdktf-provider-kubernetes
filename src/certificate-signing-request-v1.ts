// https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSigningRequestV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Automatically approve the CertificateSigningRequest
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#auto_approve CertificateSigningRequestV1#auto_approve}
  */
  readonly autoApprove?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#metadata CertificateSigningRequestV1#metadata}
  */
  readonly metadata: CertificateSigningRequestV1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#spec CertificateSigningRequestV1#spec}
  */
  readonly spec: CertificateSigningRequestV1Spec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#timeouts CertificateSigningRequestV1#timeouts}
  */
  readonly timeouts?: CertificateSigningRequestV1Timeouts;
}
export interface CertificateSigningRequestV1Metadata {
  /**
  * An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#annotations CertificateSigningRequestV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#generate_name CertificateSigningRequestV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#labels CertificateSigningRequestV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the certificate signing request, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#name CertificateSigningRequestV1#name}
  */
  readonly name?: string;
}

function certificateSigningRequestV1MetadataToTerraform(struct?: CertificateSigningRequestV1MetadataOutputReference | CertificateSigningRequestV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CertificateSigningRequestV1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string | undefined; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string | undefined) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface CertificateSigningRequestV1Spec {
  /**
  * request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. When serialized as JSON or YAML, the data is additionally base64-encoded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#request CertificateSigningRequestV1#request}
  */
  readonly request: string;
  /**
  * signerName indicates the requested signer, and is a qualified name.

List/watch requests for CertificateSigningRequests can filter on this field using a "spec.signerName=NAME" fieldSelector.

Well-known Kubernetes signers are:
 1. "kubernetes.io/kube-apiserver-client": issues client certificates that can be used to authenticate to kube-apiserver.
  Requests for this signer are never auto-approved by kube-controller-manager, can be issued by the "csrsigning" controller in kube-controller-manager.
 2. "kubernetes.io/kube-apiserver-client-kubelet": issues client certificates that kubelets use to authenticate to kube-apiserver.
  Requests for this signer can be auto-approved by the "csrapproving" controller in kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.
 3. "kubernetes.io/kubelet-serving" issues serving certificates that kubelets use to serve TLS endpoints, which kube-apiserver can connect to securely.
  Requests for this signer are never auto-approved by kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.

More details are available at https://k8s.io/docs/reference/access-authn-authz/certificate-signing-requests/#kubernetes-signers

Custom signerNames can also be specified. The signer defines:
 1. Trust distribution: how trust (CA bundles) are distributed.
 2. Permitted subjects: and behavior when a disallowed subject is requested.
 3. Required, permitted, or forbidden x509 extensions in the request (including whether subjectAltNames are allowed, which types, restrictions on allowed values) and behavior when a disallowed extension is requested.
 4. Required, permitted, or forbidden key usages / extended key usages.
 5. Expiration/certificate lifetime: whether it is fixed by the signer, configurable by the admin.
 6. Whether or not requests for CA certificates are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#signer_name CertificateSigningRequestV1#signer_name}
  */
  readonly signerName: string;
  /**
  * usages specifies a set of key usages requested in the issued certificate.

Requests for TLS client certificates typically request: "digital signature", "key encipherment", "client auth".

Requests for TLS serving certificates typically request: "key encipherment", "digital signature", "server auth".

Valid values are:
 "signing", "digital signature", "content commitment",
 "key encipherment", "key agreement", "data encipherment",
 "cert sign", "crl sign", "encipher only", "decipher only", "any",
 "server auth", "client auth",
 "code signing", "email protection", "s/mime",
 "ipsec end system", "ipsec tunnel", "ipsec user",
 "timestamping", "ocsp signing", "microsoft sgc", "netscape sgc"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#usages CertificateSigningRequestV1#usages}
  */
  readonly usages?: string[];
}

function certificateSigningRequestV1SpecToTerraform(struct?: CertificateSigningRequestV1SpecOutputReference | CertificateSigningRequestV1Spec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: cdktf.stringToTerraform(struct!.request),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
    usages: cdktf.listMapper(cdktf.stringToTerraform)(struct!.usages),
  }
}

export class CertificateSigningRequestV1SpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // request - computed: false, optional: false, required: true
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request
  }

  // signer_name - computed: false, optional: false, required: true
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName
  }

  // usages - computed: false, optional: true, required: false
  private _usages?: string[] | undefined; 
  public get usages() {
    return this.getListAttribute('usages');
  }
  public set usages(value: string[] | undefined) {
    this._usages = value;
  }
  public resetUsages() {
    this._usages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages
  }
}
export interface CertificateSigningRequestV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html#create CertificateSigningRequestV1#create}
  */
  readonly create?: string;
}

function certificateSigningRequestV1TimeoutsToTerraform(struct?: CertificateSigningRequestV1TimeoutsOutputReference | CertificateSigningRequestV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class CertificateSigningRequestV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html kubernetes_certificate_signing_request_v1}
*/
export class CertificateSigningRequestV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_certificate_signing_request_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/certificate_signing_request_v1.html kubernetes_certificate_signing_request_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSigningRequestV1Config
  */
  public constructor(scope: Construct, id: string, config: CertificateSigningRequestV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_certificate_signing_request_v1',
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
  private _autoApprove?: boolean | cdktf.IResolvable | undefined; 
  public get autoApprove() {
    return this.getBooleanAttribute('auto_approve') as any;
  }
  public set autoApprove(value: boolean | cdktf.IResolvable | undefined) {
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
  private _metadata?: CertificateSigningRequestV1Metadata; 
  private __metadataOutput = new CertificateSigningRequestV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: CertificateSigningRequestV1Metadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: CertificateSigningRequestV1Spec; 
  private __specOutput = new CertificateSigningRequestV1SpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: CertificateSigningRequestV1Spec) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CertificateSigningRequestV1Timeouts | undefined; 
  private __timeoutsOutput = new CertificateSigningRequestV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CertificateSigningRequestV1Timeouts | undefined) {
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
      metadata: certificateSigningRequestV1MetadataToTerraform(this._metadata),
      spec: certificateSigningRequestV1SpecToTerraform(this._spec),
      timeouts: certificateSigningRequestV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
