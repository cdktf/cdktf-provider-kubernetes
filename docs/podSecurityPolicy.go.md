# `podSecurityPolicy` Submodule <a name="`podSecurityPolicy` Submodule" id="@cdktf/provider-kubernetes.podSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PodSecurityPolicy <a name="PodSecurityPolicy" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy kubernetes_pod_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicy(scope Construct, id *string, config PodSecurityPolicyConfig) PodSecurityPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig">PodSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig">PodSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata"></a>

```go
func PutMetadata(value PodSecurityPolicyMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec"></a>

```go
func PutSpec(value PodSecurityPolicySpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.PodSecurityPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.PodSecurityPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.PodSecurityPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference">PodSecurityPolicyMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference">PodSecurityPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadata"></a>

```go
func Metadata() PodSecurityPolicyMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference">PodSecurityPolicyMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.spec"></a>

```go
func Spec() PodSecurityPolicySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference">PodSecurityPolicySpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.metadataInput"></a>

```go
func MetadataInput() PodSecurityPolicyMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.specInput"></a>

```go
func SpecInput() PodSecurityPolicySpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PodSecurityPolicyConfig <a name="PodSecurityPolicyConfig" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6.podSecurityPolicy.PodSecurityPolicyMetadata,
	Spec: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6.podSecurityPolicy.PodSecurityPolicySpec,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#id PodSecurityPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.metadata"></a>

```go
Metadata PodSecurityPolicyMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#metadata PodSecurityPolicy#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.spec"></a>

```go
Spec PodSecurityPolicySpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#spec PodSecurityPolicy#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#id PodSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### PodSecurityPolicyMetadata <a name="PodSecurityPolicyMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicyMetadata {
	Annotations: *map[string]*string,
	Labels: *map[string]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.name">Name</a></code> | <code>*string</code> | Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#annotations PodSecurityPolicy#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#labels PodSecurityPolicy#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#name PodSecurityPolicy#name}

---

### PodSecurityPolicySpec <a name="PodSecurityPolicySpec" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpec {
	FsGroup: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6.podSecurityPolicy.PodSecurityPolicySpecFsGroup,
	RunAsUser: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6.podSecurityPolicy.PodSecurityPolicySpecRunAsUser,
	SupplementalGroups: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups,
	AllowedCapabilities: *[]*string,
	AllowedFlexVolumes: interface{},
	AllowedHostPaths: interface{},
	AllowedProcMountTypes: *[]*string,
	AllowedUnsafeSysctls: *[]*string,
	AllowPrivilegeEscalation: interface{},
	DefaultAddCapabilities: *[]*string,
	DefaultAllowPrivilegeEscalation: interface{},
	ForbiddenSysctls: *[]*string,
	HostIpc: interface{},
	HostNetwork: interface{},
	HostPid: interface{},
	HostPorts: interface{},
	Privileged: interface{},
	ReadOnlyRootFilesystem: interface{},
	RequiredDropCapabilities: *[]*string,
	RunAsGroup: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup,
	SeLinux: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6.podSecurityPolicy.PodSecurityPolicySpecSeLinux,
	Volumes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.fsGroup">FsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a></code> | fs_group block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsUser">RunAsUser</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a></code> | run_as_user block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.supplementalGroups">SupplementalGroups</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a></code> | supplemental_groups block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedCapabilities">AllowedCapabilities</a></code> | <code>*[]*string</code> | allowedCapabilities is a list of capabilities that can be requested to add to the container. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedFlexVolumes">AllowedFlexVolumes</a></code> | <code>interface{}</code> | allowed_flex_volumes block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedHostPaths">AllowedHostPaths</a></code> | <code>interface{}</code> | allowed_host_paths block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedProcMountTypes">AllowedProcMountTypes</a></code> | <code>*[]*string</code> | AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedUnsafeSysctls">AllowedUnsafeSysctls</a></code> | <code>*[]*string</code> | allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowPrivilegeEscalation">AllowPrivilegeEscalation</a></code> | <code>interface{}</code> | allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAddCapabilities">DefaultAddCapabilities</a></code> | <code>*[]*string</code> | defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAllowPrivilegeEscalation">DefaultAllowPrivilegeEscalation</a></code> | <code>interface{}</code> | defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.forbiddenSysctls">ForbiddenSysctls</a></code> | <code>*[]*string</code> | forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostIpc">HostIpc</a></code> | <code>interface{}</code> | hostIPC determines if the policy allows the use of HostIPC in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostNetwork">HostNetwork</a></code> | <code>interface{}</code> | hostNetwork determines if the policy allows the use of HostNetwork in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPid">HostPid</a></code> | <code>interface{}</code> | hostPID determines if the policy allows the use of HostPID in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPorts">HostPorts</a></code> | <code>interface{}</code> | host_ports block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.privileged">Privileged</a></code> | <code>interface{}</code> | privileged determines if a pod can request to be run as privileged. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.readOnlyRootFilesystem">ReadOnlyRootFilesystem</a></code> | <code>interface{}</code> | readOnlyRootFilesystem when set to true will force containers to run with a read only root file system. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.requiredDropCapabilities">RequiredDropCapabilities</a></code> | <code>*[]*string</code> | requiredDropCapabilities are the capabilities that will be dropped from the container. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsGroup">RunAsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a></code> | run_as_group block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.seLinux">SeLinux</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a></code> | se_linux block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.volumes">Volumes</a></code> | <code>*[]*string</code> | volumes is an allowlist of volume plugins. |

---

##### `FsGroup`<sup>Required</sup> <a name="FsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.fsGroup"></a>

```go
FsGroup PodSecurityPolicySpecFsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

fs_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#fs_group PodSecurityPolicy#fs_group}

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsUser"></a>

```go
RunAsUser PodSecurityPolicySpecRunAsUser
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

run_as_user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#run_as_user PodSecurityPolicy#run_as_user}

---

##### `SupplementalGroups`<sup>Required</sup> <a name="SupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.supplementalGroups"></a>

```go
SupplementalGroups PodSecurityPolicySpecSupplementalGroups
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

supplemental_groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#supplemental_groups PodSecurityPolicy#supplemental_groups}

---

##### `AllowedCapabilities`<sup>Optional</sup> <a name="AllowedCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedCapabilities"></a>

```go
AllowedCapabilities *[]*string
```

- *Type:* *[]*string

allowedCapabilities is a list of capabilities that can be requested to add to the container.

Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allowed_capabilities PodSecurityPolicy#allowed_capabilities}

---

##### `AllowedFlexVolumes`<sup>Optional</sup> <a name="AllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedFlexVolumes"></a>

```go
AllowedFlexVolumes interface{}
```

- *Type:* interface{}

allowed_flex_volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allowed_flex_volumes PodSecurityPolicy#allowed_flex_volumes}

---

##### `AllowedHostPaths`<sup>Optional</sup> <a name="AllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedHostPaths"></a>

```go
AllowedHostPaths interface{}
```

- *Type:* interface{}

allowed_host_paths block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allowed_host_paths PodSecurityPolicy#allowed_host_paths}

---

##### `AllowedProcMountTypes`<sup>Optional</sup> <a name="AllowedProcMountTypes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedProcMountTypes"></a>

```go
AllowedProcMountTypes *[]*string
```

- *Type:* *[]*string

AllowedProcMountTypes is an allowlist of allowed ProcMountTypes.

Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allowed_proc_mount_types PodSecurityPolicy#allowed_proc_mount_types}

---

##### `AllowedUnsafeSysctls`<sup>Optional</sup> <a name="AllowedUnsafeSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowedUnsafeSysctls"></a>

```go
AllowedUnsafeSysctls *[]*string
```

- *Type:* *[]*string

allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allowed_unsafe_sysctls PodSecurityPolicy#allowed_unsafe_sysctls}

---

##### `AllowPrivilegeEscalation`<sup>Optional</sup> <a name="AllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.allowPrivilegeEscalation"></a>

```go
AllowPrivilegeEscalation interface{}
```

- *Type:* interface{}

allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#allow_privilege_escalation PodSecurityPolicy#allow_privilege_escalation}

---

##### `DefaultAddCapabilities`<sup>Optional</sup> <a name="DefaultAddCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAddCapabilities"></a>

```go
DefaultAddCapabilities *[]*string
```

- *Type:* *[]*string

defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.

You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#default_add_capabilities PodSecurityPolicy#default_add_capabilities}

---

##### `DefaultAllowPrivilegeEscalation`<sup>Optional</sup> <a name="DefaultAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.defaultAllowPrivilegeEscalation"></a>

```go
DefaultAllowPrivilegeEscalation interface{}
```

- *Type:* interface{}

defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#default_allow_privilege_escalation PodSecurityPolicy#default_allow_privilege_escalation}

---

##### `ForbiddenSysctls`<sup>Optional</sup> <a name="ForbiddenSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.forbiddenSysctls"></a>

```go
ForbiddenSysctls *[]*string
```

- *Type:* *[]*string

forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#forbidden_sysctls PodSecurityPolicy#forbidden_sysctls}

---

##### `HostIpc`<sup>Optional</sup> <a name="HostIpc" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostIpc"></a>

```go
HostIpc interface{}
```

- *Type:* interface{}

hostIPC determines if the policy allows the use of HostIPC in the pod spec.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#host_ipc PodSecurityPolicy#host_ipc}

---

##### `HostNetwork`<sup>Optional</sup> <a name="HostNetwork" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostNetwork"></a>

```go
HostNetwork interface{}
```

- *Type:* interface{}

hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#host_network PodSecurityPolicy#host_network}

---

##### `HostPid`<sup>Optional</sup> <a name="HostPid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPid"></a>

```go
HostPid interface{}
```

- *Type:* interface{}

hostPID determines if the policy allows the use of HostPID in the pod spec.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#host_pid PodSecurityPolicy#host_pid}

---

##### `HostPorts`<sup>Optional</sup> <a name="HostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.hostPorts"></a>

```go
HostPorts interface{}
```

- *Type:* interface{}

host_ports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#host_ports PodSecurityPolicy#host_ports}

---

##### `Privileged`<sup>Optional</sup> <a name="Privileged" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.privileged"></a>

```go
Privileged interface{}
```

- *Type:* interface{}

privileged determines if a pod can request to be run as privileged.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#privileged PodSecurityPolicy#privileged}

---

##### `ReadOnlyRootFilesystem`<sup>Optional</sup> <a name="ReadOnlyRootFilesystem" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.readOnlyRootFilesystem"></a>

```go
ReadOnlyRootFilesystem interface{}
```

- *Type:* interface{}

readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.

If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#read_only_root_filesystem PodSecurityPolicy#read_only_root_filesystem}

---

##### `RequiredDropCapabilities`<sup>Optional</sup> <a name="RequiredDropCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.requiredDropCapabilities"></a>

```go
RequiredDropCapabilities *[]*string
```

- *Type:* *[]*string

requiredDropCapabilities are the capabilities that will be dropped from the container.

These are required to be dropped and cannot be added.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#required_drop_capabilities PodSecurityPolicy#required_drop_capabilities}

---

##### `RunAsGroup`<sup>Optional</sup> <a name="RunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.runAsGroup"></a>

```go
RunAsGroup PodSecurityPolicySpecRunAsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

run_as_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#run_as_group PodSecurityPolicy#run_as_group}

---

##### `SeLinux`<sup>Optional</sup> <a name="SeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.seLinux"></a>

```go
SeLinux PodSecurityPolicySpecSeLinux
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

se_linux block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#se_linux PodSecurityPolicy#se_linux}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec.property.volumes"></a>

```go
Volumes *[]*string
```

- *Type:* *[]*string

volumes is an allowlist of volume plugins.

Empty indicates that no volumes may be used. To allow all volumes you may use '*'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#volumes PodSecurityPolicy#volumes}

---

### PodSecurityPolicySpecAllowedFlexVolumes <a name="PodSecurityPolicySpecAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecAllowedFlexVolumes {
	Driver: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes.property.driver">Driver</a></code> | <code>*string</code> | driver is the name of the Flexvolume driver. |

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumes.property.driver"></a>

```go
Driver *string
```

- *Type:* *string

driver is the name of the Flexvolume driver.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#driver PodSecurityPolicy#driver}

---

### PodSecurityPolicySpecAllowedHostPaths <a name="PodSecurityPolicySpecAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecAllowedHostPaths {
	PathPrefix: *string,
	ReadOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | pathPrefix is the path prefix that the host volume must match. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly. |

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.pathPrefix"></a>

```go
PathPrefix *string
```

- *Type:* *string

pathPrefix is the path prefix that the host volume must match.

It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#path_prefix PodSecurityPolicy#path_prefix}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPaths.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#read_only PodSecurityPolicy#read_only}

---

### PodSecurityPolicySpecFsGroup <a name="PodSecurityPolicySpecFsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecFsGroup {
	Rule: *string,
	Range: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.rule">Rule</a></code> | <code>*string</code> | rule is the strategy that will dictate what FSGroup is used in the SecurityContext. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.range">Range</a></code> | <code>interface{}</code> | range block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

rule is the strategy that will dictate what FSGroup is used in the SecurityContext.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup.property.range"></a>

```go
Range interface{}
```

- *Type:* interface{}

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecFsGroupRange <a name="PodSecurityPolicySpecFsGroupRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecFsGroupRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.max">Max</a></code> | <code>*f64</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.min">Min</a></code> | <code>*f64</code> | min is the start of the range, inclusive. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#max PodSecurityPolicy#max}

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecHostPorts <a name="PodSecurityPolicySpecHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecHostPorts {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.max">Max</a></code> | <code>*f64</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.min">Min</a></code> | <code>*f64</code> | min is the start of the range, inclusive. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#max PodSecurityPolicy#max}

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPorts.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecRunAsGroup <a name="PodSecurityPolicySpecRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecRunAsGroup {
	Rule: *string,
	Range: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.rule">Rule</a></code> | <code>*string</code> | rule is the strategy that will dictate the allowable RunAsGroup values that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.range">Range</a></code> | <code>interface{}</code> | range block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

rule is the strategy that will dictate the allowable RunAsGroup values that may be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup.property.range"></a>

```go
Range interface{}
```

- *Type:* interface{}

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecRunAsGroupRange <a name="PodSecurityPolicySpecRunAsGroupRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecRunAsGroupRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.max">Max</a></code> | <code>*f64</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.min">Min</a></code> | <code>*f64</code> | min is the start of the range, inclusive. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#max PodSecurityPolicy#max}

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecRunAsUser <a name="PodSecurityPolicySpecRunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecRunAsUser {
	Rule: *string,
	Range: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.rule">Rule</a></code> | <code>*string</code> | rule is the strategy that will dictate the allowable RunAsUser values that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.range">Range</a></code> | <code>interface{}</code> | range block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

rule is the strategy that will dictate the allowable RunAsUser values that may be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser.property.range"></a>

```go
Range interface{}
```

- *Type:* interface{}

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecRunAsUserRange <a name="PodSecurityPolicySpecRunAsUserRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecRunAsUserRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.max">Max</a></code> | <code>*f64</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.min">Min</a></code> | <code>*f64</code> | min is the start of the range, inclusive. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#max PodSecurityPolicy#max}

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#min PodSecurityPolicy#min}

---

### PodSecurityPolicySpecSeLinux <a name="PodSecurityPolicySpecSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecSeLinux {
	Rule: *string,
	SeLinuxOptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.rule">Rule</a></code> | <code>*string</code> | rule is the strategy that will dictate the allowable labels that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.seLinuxOptions">SeLinuxOptions</a></code> | <code>interface{}</code> | se_linux_options block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

rule is the strategy that will dictate the allowable labels that may be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `SeLinuxOptions`<sup>Optional</sup> <a name="SeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux.property.seLinuxOptions"></a>

```go
SeLinuxOptions interface{}
```

- *Type:* interface{}

se_linux_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#se_linux_options PodSecurityPolicy#se_linux_options}

---

### PodSecurityPolicySpecSeLinuxSeLinuxOptions <a name="PodSecurityPolicySpecSeLinuxSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions {
	Level: *string,
	Role: *string,
	Type: *string,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.level">Level</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#level PodSecurityPolicy#level}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#role PodSecurityPolicy#role}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#type PodSecurityPolicy#type}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.user">User</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#user PodSecurityPolicy#user}. |

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.level"></a>

```go
Level *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#level PodSecurityPolicy#level}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#role PodSecurityPolicy#role}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#type PodSecurityPolicy#type}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptions.property.user"></a>

```go
User *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#user PodSecurityPolicy#user}.

---

### PodSecurityPolicySpecSupplementalGroups <a name="PodSecurityPolicySpecSupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecSupplementalGroups {
	Rule: *string,
	Range: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.rule">Rule</a></code> | <code>*string</code> | rule is the strategy that will dictate what supplemental groups is used in the SecurityContext. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.range">Range</a></code> | <code>interface{}</code> | range block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#rule PodSecurityPolicy#rule}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups.property.range"></a>

```go
Range interface{}
```

- *Type:* interface{}

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#range PodSecurityPolicy#range}

---

### PodSecurityPolicySpecSupplementalGroupsRange <a name="PodSecurityPolicySpecSupplementalGroupsRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

&podsecuritypolicy.PodSecurityPolicySpecSupplementalGroupsRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.max">Max</a></code> | <code>*f64</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.min">Min</a></code> | <code>*f64</code> | min is the start of the range, inclusive. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#max PodSecurityPolicy#max}

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy#min PodSecurityPolicy#min}

---

## Classes <a name="Classes" id="Classes"></a>

### PodSecurityPolicyMetadataOutputReference <a name="PodSecurityPolicyMetadataOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicyMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PodSecurityPolicyMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() PodSecurityPolicyMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicyMetadata">PodSecurityPolicyMetadata</a>

---


### PodSecurityPolicySpecAllowedFlexVolumesList <a name="PodSecurityPolicySpecAllowedFlexVolumesList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecAllowedFlexVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PodSecurityPolicySpecAllowedFlexVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.get"></a>

```go
func Get(index *f64) PodSecurityPolicySpecAllowedFlexVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecAllowedFlexVolumesOutputReference <a name="PodSecurityPolicySpecAllowedFlexVolumesOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecAllowedFlexVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PodSecurityPolicySpecAllowedFlexVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driverInput">DriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driver">Driver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driverInput"></a>

```go
func DriverInput() *string
```

- *Type:* *string

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.driver"></a>

```go
func Driver() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecAllowedHostPathsList <a name="PodSecurityPolicySpecAllowedHostPathsList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecAllowedHostPathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PodSecurityPolicySpecAllowedHostPathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.get"></a>

```go
func Get(index *f64) PodSecurityPolicySpecAllowedHostPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecAllowedHostPathsOutputReference <a name="PodSecurityPolicySpecAllowedHostPathsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecAllowedHostPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PodSecurityPolicySpecAllowedHostPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefixInput">PathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathPrefixInput`<sup>Optional</sup> <a name="PathPrefixInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefixInput"></a>

```go
func PathPrefixInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.pathPrefix"></a>

```go
func PathPrefix() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecFsGroupOutputReference <a name="PodSecurityPolicySpecFsGroupOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecFsGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PodSecurityPolicySpecFsGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resetRange">ResetRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.putRange"></a>

```go
func PutRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.putRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.resetRange"></a>

```go
func ResetRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList">PodSecurityPolicySpecFsGroupRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rangeInput">RangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.range"></a>

```go
func Range() PodSecurityPolicySpecFsGroupRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList">PodSecurityPolicySpecFsGroupRangeList</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rangeInput"></a>

```go
func RangeInput() interface{}
```

- *Type:* interface{}

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() PodSecurityPolicySpecFsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

---


### PodSecurityPolicySpecFsGroupRangeList <a name="PodSecurityPolicySpecFsGroupRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecFsGroupRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PodSecurityPolicySpecFsGroupRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.get"></a>

```go
func Get(index *f64) PodSecurityPolicySpecFsGroupRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecFsGroupRangeOutputReference <a name="PodSecurityPolicySpecFsGroupRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecFsGroupRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PodSecurityPolicySpecFsGroupRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecHostPortsList <a name="PodSecurityPolicySpecHostPortsList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecHostPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PodSecurityPolicySpecHostPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.get"></a>

```go
func Get(index *f64) PodSecurityPolicySpecHostPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecHostPortsOutputReference <a name="PodSecurityPolicySpecHostPortsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecHostPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PodSecurityPolicySpecHostPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecOutputReference <a name="PodSecurityPolicySpecOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PodSecurityPolicySpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedFlexVolumes">PutAllowedFlexVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedHostPaths">PutAllowedHostPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putFsGroup">PutFsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putHostPorts">PutHostPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsGroup">PutRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsUser">PutRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSeLinux">PutSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSupplementalGroups">PutSupplementalGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedCapabilities">ResetAllowedCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedFlexVolumes">ResetAllowedFlexVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedHostPaths">ResetAllowedHostPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedProcMountTypes">ResetAllowedProcMountTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedUnsafeSysctls">ResetAllowedUnsafeSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowPrivilegeEscalation">ResetAllowPrivilegeEscalation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAddCapabilities">ResetDefaultAddCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAllowPrivilegeEscalation">ResetDefaultAllowPrivilegeEscalation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetForbiddenSysctls">ResetForbiddenSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostIpc">ResetHostIpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostNetwork">ResetHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPid">ResetHostPid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPorts">ResetHostPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetPrivileged">ResetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetReadOnlyRootFilesystem">ResetReadOnlyRootFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRequiredDropCapabilities">ResetRequiredDropCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRunAsGroup">ResetRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetSeLinux">ResetSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedFlexVolumes` <a name="PutAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedFlexVolumes"></a>

```go
func PutAllowedFlexVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedFlexVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAllowedHostPaths` <a name="PutAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedHostPaths"></a>

```go
func PutAllowedHostPaths(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putAllowedHostPaths.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFsGroup` <a name="PutFsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putFsGroup"></a>

```go
func PutFsGroup(value PodSecurityPolicySpecFsGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putFsGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

---

##### `PutHostPorts` <a name="PutHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putHostPorts"></a>

```go
func PutHostPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putHostPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRunAsGroup` <a name="PutRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsGroup"></a>

```go
func PutRunAsGroup(value PodSecurityPolicySpecRunAsGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

---

##### `PutRunAsUser` <a name="PutRunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsUser"></a>

```go
func PutRunAsUser(value PodSecurityPolicySpecRunAsUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putRunAsUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

---

##### `PutSeLinux` <a name="PutSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSeLinux"></a>

```go
func PutSeLinux(value PodSecurityPolicySpecSeLinux)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSeLinux.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

---

##### `PutSupplementalGroups` <a name="PutSupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSupplementalGroups"></a>

```go
func PutSupplementalGroups(value PodSecurityPolicySpecSupplementalGroups)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.putSupplementalGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

---

##### `ResetAllowedCapabilities` <a name="ResetAllowedCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedCapabilities"></a>

```go
func ResetAllowedCapabilities()
```

##### `ResetAllowedFlexVolumes` <a name="ResetAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedFlexVolumes"></a>

```go
func ResetAllowedFlexVolumes()
```

##### `ResetAllowedHostPaths` <a name="ResetAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedHostPaths"></a>

```go
func ResetAllowedHostPaths()
```

##### `ResetAllowedProcMountTypes` <a name="ResetAllowedProcMountTypes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedProcMountTypes"></a>

```go
func ResetAllowedProcMountTypes()
```

##### `ResetAllowedUnsafeSysctls` <a name="ResetAllowedUnsafeSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowedUnsafeSysctls"></a>

```go
func ResetAllowedUnsafeSysctls()
```

##### `ResetAllowPrivilegeEscalation` <a name="ResetAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetAllowPrivilegeEscalation"></a>

```go
func ResetAllowPrivilegeEscalation()
```

##### `ResetDefaultAddCapabilities` <a name="ResetDefaultAddCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAddCapabilities"></a>

```go
func ResetDefaultAddCapabilities()
```

##### `ResetDefaultAllowPrivilegeEscalation` <a name="ResetDefaultAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetDefaultAllowPrivilegeEscalation"></a>

```go
func ResetDefaultAllowPrivilegeEscalation()
```

##### `ResetForbiddenSysctls` <a name="ResetForbiddenSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetForbiddenSysctls"></a>

```go
func ResetForbiddenSysctls()
```

##### `ResetHostIpc` <a name="ResetHostIpc" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostIpc"></a>

```go
func ResetHostIpc()
```

##### `ResetHostNetwork` <a name="ResetHostNetwork" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostNetwork"></a>

```go
func ResetHostNetwork()
```

##### `ResetHostPid` <a name="ResetHostPid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPid"></a>

```go
func ResetHostPid()
```

##### `ResetHostPorts` <a name="ResetHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetHostPorts"></a>

```go
func ResetHostPorts()
```

##### `ResetPrivileged` <a name="ResetPrivileged" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetPrivileged"></a>

```go
func ResetPrivileged()
```

##### `ResetReadOnlyRootFilesystem` <a name="ResetReadOnlyRootFilesystem" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetReadOnlyRootFilesystem"></a>

```go
func ResetReadOnlyRootFilesystem()
```

##### `ResetRequiredDropCapabilities` <a name="ResetRequiredDropCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRequiredDropCapabilities"></a>

```go
func ResetRequiredDropCapabilities()
```

##### `ResetRunAsGroup` <a name="ResetRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetRunAsGroup"></a>

```go
func ResetRunAsGroup()
```

##### `ResetSeLinux` <a name="ResetSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetSeLinux"></a>

```go
func ResetSeLinux()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumes">AllowedFlexVolumes</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList">PodSecurityPolicySpecAllowedFlexVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPaths">AllowedHostPaths</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList">PodSecurityPolicySpecAllowedHostPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroup">FsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference">PodSecurityPolicySpecFsGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPorts">HostPorts</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList">PodSecurityPolicySpecHostPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroup">RunAsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference">PodSecurityPolicySpecRunAsGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUser">RunAsUser</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference">PodSecurityPolicySpecRunAsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinux">SeLinux</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference">PodSecurityPolicySpecSeLinuxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroups">SupplementalGroups</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference">PodSecurityPolicySpecSupplementalGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilitiesInput">AllowedCapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumesInput">AllowedFlexVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPathsInput">AllowedHostPathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypesInput">AllowedProcMountTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctlsInput">AllowedUnsafeSysctlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalationInput">AllowPrivilegeEscalationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilitiesInput">DefaultAddCapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalationInput">DefaultAllowPrivilegeEscalationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctlsInput">ForbiddenSysctlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroupInput">FsGroupInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpcInput">HostIpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetworkInput">HostNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPidInput">HostPidInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPortsInput">HostPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privilegedInput">PrivilegedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystemInput">ReadOnlyRootFilesystemInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilitiesInput">RequiredDropCapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroupInput">RunAsGroupInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUserInput">RunAsUserInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinuxInput">SeLinuxInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroupsInput">SupplementalGroupsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumesInput">VolumesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilities">AllowedCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypes">AllowedProcMountTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctls">AllowedUnsafeSysctls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalation">AllowPrivilegeEscalation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilities">DefaultAddCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalation">DefaultAllowPrivilegeEscalation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctls">ForbiddenSysctls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpc">HostIpc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetwork">HostNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPid">HostPid</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privileged">Privileged</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystem">ReadOnlyRootFilesystem</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilities">RequiredDropCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumes">Volumes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedFlexVolumes`<sup>Required</sup> <a name="AllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumes"></a>

```go
func AllowedFlexVolumes() PodSecurityPolicySpecAllowedFlexVolumesList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedFlexVolumesList">PodSecurityPolicySpecAllowedFlexVolumesList</a>

---

##### `AllowedHostPaths`<sup>Required</sup> <a name="AllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPaths"></a>

```go
func AllowedHostPaths() PodSecurityPolicySpecAllowedHostPathsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecAllowedHostPathsList">PodSecurityPolicySpecAllowedHostPathsList</a>

---

##### `FsGroup`<sup>Required</sup> <a name="FsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroup"></a>

```go
func FsGroup() PodSecurityPolicySpecFsGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroupOutputReference">PodSecurityPolicySpecFsGroupOutputReference</a>

---

##### `HostPorts`<sup>Required</sup> <a name="HostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPorts"></a>

```go
func HostPorts() PodSecurityPolicySpecHostPortsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecHostPortsList">PodSecurityPolicySpecHostPortsList</a>

---

##### `RunAsGroup`<sup>Required</sup> <a name="RunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroup"></a>

```go
func RunAsGroup() PodSecurityPolicySpecRunAsGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference">PodSecurityPolicySpecRunAsGroupOutputReference</a>

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUser"></a>

```go
func RunAsUser() PodSecurityPolicySpecRunAsUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference">PodSecurityPolicySpecRunAsUserOutputReference</a>

---

##### `SeLinux`<sup>Required</sup> <a name="SeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinux"></a>

```go
func SeLinux() PodSecurityPolicySpecSeLinuxOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference">PodSecurityPolicySpecSeLinuxOutputReference</a>

---

##### `SupplementalGroups`<sup>Required</sup> <a name="SupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroups"></a>

```go
func SupplementalGroups() PodSecurityPolicySpecSupplementalGroupsOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference">PodSecurityPolicySpecSupplementalGroupsOutputReference</a>

---

##### `AllowedCapabilitiesInput`<sup>Optional</sup> <a name="AllowedCapabilitiesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilitiesInput"></a>

```go
func AllowedCapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedFlexVolumesInput`<sup>Optional</sup> <a name="AllowedFlexVolumesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedFlexVolumesInput"></a>

```go
func AllowedFlexVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedHostPathsInput`<sup>Optional</sup> <a name="AllowedHostPathsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedHostPathsInput"></a>

```go
func AllowedHostPathsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedProcMountTypesInput`<sup>Optional</sup> <a name="AllowedProcMountTypesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypesInput"></a>

```go
func AllowedProcMountTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedUnsafeSysctlsInput`<sup>Optional</sup> <a name="AllowedUnsafeSysctlsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctlsInput"></a>

```go
func AllowedUnsafeSysctlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowPrivilegeEscalationInput`<sup>Optional</sup> <a name="AllowPrivilegeEscalationInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalationInput"></a>

```go
func AllowPrivilegeEscalationInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAddCapabilitiesInput`<sup>Optional</sup> <a name="DefaultAddCapabilitiesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilitiesInput"></a>

```go
func DefaultAddCapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultAllowPrivilegeEscalationInput`<sup>Optional</sup> <a name="DefaultAllowPrivilegeEscalationInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalationInput"></a>

```go
func DefaultAllowPrivilegeEscalationInput() interface{}
```

- *Type:* interface{}

---

##### `ForbiddenSysctlsInput`<sup>Optional</sup> <a name="ForbiddenSysctlsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctlsInput"></a>

```go
func ForbiddenSysctlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FsGroupInput`<sup>Optional</sup> <a name="FsGroupInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.fsGroupInput"></a>

```go
func FsGroupInput() PodSecurityPolicySpecFsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecFsGroup">PodSecurityPolicySpecFsGroup</a>

---

##### `HostIpcInput`<sup>Optional</sup> <a name="HostIpcInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpcInput"></a>

```go
func HostIpcInput() interface{}
```

- *Type:* interface{}

---

##### `HostNetworkInput`<sup>Optional</sup> <a name="HostNetworkInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetworkInput"></a>

```go
func HostNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `HostPidInput`<sup>Optional</sup> <a name="HostPidInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPidInput"></a>

```go
func HostPidInput() interface{}
```

- *Type:* interface{}

---

##### `HostPortsInput`<sup>Optional</sup> <a name="HostPortsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPortsInput"></a>

```go
func HostPortsInput() interface{}
```

- *Type:* interface{}

---

##### `PrivilegedInput`<sup>Optional</sup> <a name="PrivilegedInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privilegedInput"></a>

```go
func PrivilegedInput() interface{}
```

- *Type:* interface{}

---

##### `ReadOnlyRootFilesystemInput`<sup>Optional</sup> <a name="ReadOnlyRootFilesystemInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystemInput"></a>

```go
func ReadOnlyRootFilesystemInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredDropCapabilitiesInput`<sup>Optional</sup> <a name="RequiredDropCapabilitiesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilitiesInput"></a>

```go
func RequiredDropCapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RunAsGroupInput`<sup>Optional</sup> <a name="RunAsGroupInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsGroupInput"></a>

```go
func RunAsGroupInput() PodSecurityPolicySpecRunAsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

---

##### `RunAsUserInput`<sup>Optional</sup> <a name="RunAsUserInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.runAsUserInput"></a>

```go
func RunAsUserInput() PodSecurityPolicySpecRunAsUser
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

---

##### `SeLinuxInput`<sup>Optional</sup> <a name="SeLinuxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.seLinuxInput"></a>

```go
func SeLinuxInput() PodSecurityPolicySpecSeLinux
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

---

##### `SupplementalGroupsInput`<sup>Optional</sup> <a name="SupplementalGroupsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.supplementalGroupsInput"></a>

```go
func SupplementalGroupsInput() PodSecurityPolicySpecSupplementalGroups
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumesInput"></a>

```go
func VolumesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedCapabilities`<sup>Required</sup> <a name="AllowedCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedCapabilities"></a>

```go
func AllowedCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedProcMountTypes`<sup>Required</sup> <a name="AllowedProcMountTypes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedProcMountTypes"></a>

```go
func AllowedProcMountTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedUnsafeSysctls`<sup>Required</sup> <a name="AllowedUnsafeSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowedUnsafeSysctls"></a>

```go
func AllowedUnsafeSysctls() *[]*string
```

- *Type:* *[]*string

---

##### `AllowPrivilegeEscalation`<sup>Required</sup> <a name="AllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.allowPrivilegeEscalation"></a>

```go
func AllowPrivilegeEscalation() interface{}
```

- *Type:* interface{}

---

##### `DefaultAddCapabilities`<sup>Required</sup> <a name="DefaultAddCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAddCapabilities"></a>

```go
func DefaultAddCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultAllowPrivilegeEscalation`<sup>Required</sup> <a name="DefaultAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.defaultAllowPrivilegeEscalation"></a>

```go
func DefaultAllowPrivilegeEscalation() interface{}
```

- *Type:* interface{}

---

##### `ForbiddenSysctls`<sup>Required</sup> <a name="ForbiddenSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.forbiddenSysctls"></a>

```go
func ForbiddenSysctls() *[]*string
```

- *Type:* *[]*string

---

##### `HostIpc`<sup>Required</sup> <a name="HostIpc" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostIpc"></a>

```go
func HostIpc() interface{}
```

- *Type:* interface{}

---

##### `HostNetwork`<sup>Required</sup> <a name="HostNetwork" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostNetwork"></a>

```go
func HostNetwork() interface{}
```

- *Type:* interface{}

---

##### `HostPid`<sup>Required</sup> <a name="HostPid" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.hostPid"></a>

```go
func HostPid() interface{}
```

- *Type:* interface{}

---

##### `Privileged`<sup>Required</sup> <a name="Privileged" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.privileged"></a>

```go
func Privileged() interface{}
```

- *Type:* interface{}

---

##### `ReadOnlyRootFilesystem`<sup>Required</sup> <a name="ReadOnlyRootFilesystem" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.readOnlyRootFilesystem"></a>

```go
func ReadOnlyRootFilesystem() interface{}
```

- *Type:* interface{}

---

##### `RequiredDropCapabilities`<sup>Required</sup> <a name="RequiredDropCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.requiredDropCapabilities"></a>

```go
func RequiredDropCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.volumes"></a>

```go
func Volumes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecOutputReference.property.internalValue"></a>

```go
func InternalValue() PodSecurityPolicySpec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpec">PodSecurityPolicySpec</a>

---


### PodSecurityPolicySpecRunAsGroupOutputReference <a name="PodSecurityPolicySpecRunAsGroupOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecRunAsGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PodSecurityPolicySpecRunAsGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resetRange">ResetRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.putRange"></a>

```go
func PutRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.putRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.resetRange"></a>

```go
func ResetRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList">PodSecurityPolicySpecRunAsGroupRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rangeInput">RangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.range"></a>

```go
func Range() PodSecurityPolicySpecRunAsGroupRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList">PodSecurityPolicySpecRunAsGroupRangeList</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rangeInput"></a>

```go
func RangeInput() interface{}
```

- *Type:* interface{}

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() PodSecurityPolicySpecRunAsGroup
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroup">PodSecurityPolicySpecRunAsGroup</a>

---


### PodSecurityPolicySpecRunAsGroupRangeList <a name="PodSecurityPolicySpecRunAsGroupRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecRunAsGroupRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PodSecurityPolicySpecRunAsGroupRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.get"></a>

```go
func Get(index *f64) PodSecurityPolicySpecRunAsGroupRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecRunAsGroupRangeOutputReference <a name="PodSecurityPolicySpecRunAsGroupRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecRunAsGroupRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PodSecurityPolicySpecRunAsGroupRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsGroupRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecRunAsUserOutputReference <a name="PodSecurityPolicySpecRunAsUserOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecRunAsUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PodSecurityPolicySpecRunAsUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resetRange">ResetRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.putRange"></a>

```go
func PutRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.putRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.resetRange"></a>

```go
func ResetRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList">PodSecurityPolicySpecRunAsUserRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rangeInput">RangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.range"></a>

```go
func Range() PodSecurityPolicySpecRunAsUserRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList">PodSecurityPolicySpecRunAsUserRangeList</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rangeInput"></a>

```go
func RangeInput() interface{}
```

- *Type:* interface{}

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserOutputReference.property.internalValue"></a>

```go
func InternalValue() PodSecurityPolicySpecRunAsUser
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUser">PodSecurityPolicySpecRunAsUser</a>

---


### PodSecurityPolicySpecRunAsUserRangeList <a name="PodSecurityPolicySpecRunAsUserRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecRunAsUserRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PodSecurityPolicySpecRunAsUserRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.get"></a>

```go
func Get(index *f64) PodSecurityPolicySpecRunAsUserRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecRunAsUserRangeOutputReference <a name="PodSecurityPolicySpecRunAsUserRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecRunAsUserRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PodSecurityPolicySpecRunAsUserRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecRunAsUserRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecSeLinuxOutputReference <a name="PodSecurityPolicySpecSeLinuxOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecSeLinuxOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PodSecurityPolicySpecSeLinuxOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.putSeLinuxOptions">PutSeLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resetSeLinuxOptions">ResetSeLinuxOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSeLinuxOptions` <a name="PutSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.putSeLinuxOptions"></a>

```go
func PutSeLinuxOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.putSeLinuxOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSeLinuxOptions` <a name="ResetSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.resetSeLinuxOptions"></a>

```go
func ResetSeLinuxOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptions">SeLinuxOptions</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList">PodSecurityPolicySpecSeLinuxSeLinuxOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptionsInput">SeLinuxOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SeLinuxOptions`<sup>Required</sup> <a name="SeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptions"></a>

```go
func SeLinuxOptions() PodSecurityPolicySpecSeLinuxSeLinuxOptionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList">PodSecurityPolicySpecSeLinuxSeLinuxOptionsList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `SeLinuxOptionsInput`<sup>Optional</sup> <a name="SeLinuxOptionsInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.seLinuxOptionsInput"></a>

```go
func SeLinuxOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxOutputReference.property.internalValue"></a>

```go
func InternalValue() PodSecurityPolicySpecSeLinux
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinux">PodSecurityPolicySpecSeLinux</a>

---


### PodSecurityPolicySpecSeLinuxSeLinuxOptionsList <a name="PodSecurityPolicySpecSeLinuxSeLinuxOptionsList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecSeLinuxSeLinuxOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PodSecurityPolicySpecSeLinuxSeLinuxOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.get"></a>

```go
func Get(index *f64) PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference <a name="PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSeLinuxSeLinuxOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecSupplementalGroupsOutputReference <a name="PodSecurityPolicySpecSupplementalGroupsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecSupplementalGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PodSecurityPolicySpecSupplementalGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resetRange">ResetRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.putRange"></a>

```go
func PutRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.putRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.resetRange"></a>

```go
func ResetRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList">PodSecurityPolicySpecSupplementalGroupsRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rangeInput">RangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.range"></a>

```go
func Range() PodSecurityPolicySpecSupplementalGroupsRangeList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList">PodSecurityPolicySpecSupplementalGroupsRangeList</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rangeInput"></a>

```go
func RangeInput() interface{}
```

- *Type:* interface{}

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() PodSecurityPolicySpecSupplementalGroups
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroups">PodSecurityPolicySpecSupplementalGroups</a>

---


### PodSecurityPolicySpecSupplementalGroupsRangeList <a name="PodSecurityPolicySpecSupplementalGroupsRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecSupplementalGroupsRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PodSecurityPolicySpecSupplementalGroupsRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.get"></a>

```go
func Get(index *f64) PodSecurityPolicySpecSupplementalGroupsRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodSecurityPolicySpecSupplementalGroupsRangeOutputReference <a name="PodSecurityPolicySpecSupplementalGroupsRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v6/podsecuritypolicy"

podsecuritypolicy.NewPodSecurityPolicySpecSupplementalGroupsRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PodSecurityPolicySpecSupplementalGroupsRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicy.PodSecurityPolicySpecSupplementalGroupsRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



