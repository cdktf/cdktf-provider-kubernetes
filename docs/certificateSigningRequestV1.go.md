# `kubernetes_certificate_signing_request_v1`

Refer to the Terraform Registory for docs: [`kubernetes_certificate_signing_request_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1).

# `certificateSigningRequestV1` Submodule <a name="`certificateSigningRequestV1` Submodule" id="@cdktf/provider-kubernetes.certificateSigningRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateSigningRequestV1 <a name="CertificateSigningRequestV1" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1 kubernetes_certificate_signing_request_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

certificatesigningrequestv1.NewCertificateSigningRequestV1(scope Construct, id *string, config CertificateSigningRequestV1Config) CertificateSigningRequestV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config">CertificateSigningRequestV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config">CertificateSigningRequestV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetAutoApprove">ResetAutoApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putMetadata"></a>

```go
func PutMetadata(value CertificateSigningRequestV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putSpec"></a>

```go
func PutSpec(value CertificateSigningRequestV1Spec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putTimeouts"></a>

```go
func PutTimeouts(value CertificateSigningRequestV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts">CertificateSigningRequestV1Timeouts</a>

---

##### `ResetAutoApprove` <a name="ResetAutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetAutoApprove"></a>

```go
func ResetAutoApprove()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

certificatesigningrequestv1.CertificateSigningRequestV1_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

certificatesigningrequestv1.CertificateSigningRequestV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

certificatesigningrequestv1.CertificateSigningRequestV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference">CertificateSigningRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference">CertificateSigningRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference">CertificateSigningRequestV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.autoApproveInput">AutoApproveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.autoApprove">AutoApprove</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.metadata"></a>

```go
func Metadata() CertificateSigningRequestV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference">CertificateSigningRequestV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.spec"></a>

```go
func Spec() CertificateSigningRequestV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference">CertificateSigningRequestV1SpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.timeouts"></a>

```go
func Timeouts() CertificateSigningRequestV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference">CertificateSigningRequestV1TimeoutsOutputReference</a>

---

##### `AutoApproveInput`<sup>Optional</sup> <a name="AutoApproveInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.autoApproveInput"></a>

```go
func AutoApproveInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.metadataInput"></a>

```go
func MetadataInput() CertificateSigningRequestV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.specInput"></a>

```go
func SpecInput() CertificateSigningRequestV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoApprove`<sup>Required</sup> <a name="AutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.autoApprove"></a>

```go
func AutoApprove() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateSigningRequestV1Config <a name="CertificateSigningRequestV1Config" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

&certificatesigningrequestv1.CertificateSigningRequestV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6.certificateSigningRequestV1.CertificateSigningRequestV1Metadata,
	Spec: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6.certificateSigningRequestV1.CertificateSigningRequestV1Spec,
	AutoApprove: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.autoApprove">AutoApprove</a></code> | <code>interface{}</code> | Automatically approve the CertificateSigningRequest. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#id CertificateSigningRequestV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts">CertificateSigningRequestV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.metadata"></a>

```go
Metadata CertificateSigningRequestV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#metadata CertificateSigningRequestV1#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.spec"></a>

```go
Spec CertificateSigningRequestV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#spec CertificateSigningRequestV1#spec}

---

##### `AutoApprove`<sup>Optional</sup> <a name="AutoApprove" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.autoApprove"></a>

```go
AutoApprove interface{}
```

- *Type:* interface{}

Automatically approve the CertificateSigningRequest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#auto_approve CertificateSigningRequestV1#auto_approve}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#id CertificateSigningRequestV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Config.property.timeouts"></a>

```go
Timeouts CertificateSigningRequestV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts">CertificateSigningRequestV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#timeouts CertificateSigningRequestV1#timeouts}

---

### CertificateSigningRequestV1Metadata <a name="CertificateSigningRequestV1Metadata" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

&certificatesigningrequestv1.CertificateSigningRequestV1Metadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the certificate signing request, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the certificate signing request that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#annotations CertificateSigningRequestV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#generate_name CertificateSigningRequestV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the certificate signing request.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#labels CertificateSigningRequestV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the certificate signing request, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#name CertificateSigningRequestV1#name}

---

### CertificateSigningRequestV1Spec <a name="CertificateSigningRequestV1Spec" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

&certificatesigningrequestv1.CertificateSigningRequestV1Spec {
	Request: *string,
	SignerName: *string,
	Usages: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.request">Request</a></code> | <code>*string</code> | request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.signerName">SignerName</a></code> | <code>*string</code> | signerName indicates the requested signer, and is a qualified name. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.usages">Usages</a></code> | <code>*[]*string</code> | usages specifies a set of key usages requested in the issued certificate. |

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.request"></a>

```go
Request *string
```

- *Type:* *string

request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block.

When serialized as JSON or YAML, the data is additionally base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#request CertificateSigningRequestV1#request}

---

##### `SignerName`<sup>Required</sup> <a name="SignerName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.signerName"></a>

```go
SignerName *string
```

- *Type:* *string

signerName indicates the requested signer, and is a qualified name.

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#signer_name CertificateSigningRequestV1#signer_name}

---

##### `Usages`<sup>Optional</sup> <a name="Usages" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec.property.usages"></a>

```go
Usages *[]*string
```

- *Type:* *[]*string

usages specifies a set of key usages requested in the issued certificate.

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#usages CertificateSigningRequestV1#usages}

---

### CertificateSigningRequestV1Timeouts <a name="CertificateSigningRequestV1Timeouts" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

&certificatesigningrequestv1.CertificateSigningRequestV1Timeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#create CertificateSigningRequestV1#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/certificate_signing_request_v1#create CertificateSigningRequestV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateSigningRequestV1MetadataOutputReference <a name="CertificateSigningRequestV1MetadataOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

certificatesigningrequestv1.NewCertificateSigningRequestV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificateSigningRequestV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificateSigningRequestV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Metadata">CertificateSigningRequestV1Metadata</a>

---


### CertificateSigningRequestV1SpecOutputReference <a name="CertificateSigningRequestV1SpecOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

certificatesigningrequestv1.NewCertificateSigningRequestV1SpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificateSigningRequestV1SpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.resetUsages">ResetUsages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUsages` <a name="ResetUsages" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.resetUsages"></a>

```go
func ResetUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.requestInput">RequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.signerNameInput">SignerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.usagesInput">UsagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.request">Request</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.signerName">SignerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.usages">Usages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.requestInput"></a>

```go
func RequestInput() *string
```

- *Type:* *string

---

##### `SignerNameInput`<sup>Optional</sup> <a name="SignerNameInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.signerNameInput"></a>

```go
func SignerNameInput() *string
```

- *Type:* *string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.usagesInput"></a>

```go
func UsagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.request"></a>

```go
func Request() *string
```

- *Type:* *string

---

##### `SignerName`<sup>Required</sup> <a name="SignerName" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.signerName"></a>

```go
func SignerName() *string
```

- *Type:* *string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.usages"></a>

```go
func Usages() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1SpecOutputReference.property.internalValue"></a>

```go
func InternalValue() CertificateSigningRequestV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1Spec">CertificateSigningRequestV1Spec</a>

---


### CertificateSigningRequestV1TimeoutsOutputReference <a name="CertificateSigningRequestV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/certificatesigningrequestv1"

certificatesigningrequestv1.NewCertificateSigningRequestV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificateSigningRequestV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.certificateSigningRequestV1.CertificateSigningRequestV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



