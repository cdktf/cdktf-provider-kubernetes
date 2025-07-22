# `validatingWebhookConfiguration` Submodule <a name="`validatingWebhookConfiguration` Submodule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ValidatingWebhookConfiguration <a name="ValidatingWebhookConfiguration" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration kubernetes_validating_webhook_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfiguration(scope Construct, id *string, config ValidatingWebhookConfigurationConfig) ValidatingWebhookConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig">ValidatingWebhookConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig">ValidatingWebhookConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata"></a>

```go
func PutMetadata(value ValidatingWebhookConfigurationMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putWebhook"></a>

```go
func PutWebhook(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.putWebhook.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ValidatingWebhookConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.ValidatingWebhookConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.ValidatingWebhookConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.ValidatingWebhookConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.ValidatingWebhookConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ValidatingWebhookConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ValidatingWebhookConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ValidatingWebhookConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ValidatingWebhookConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference">ValidatingWebhookConfigurationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhook">Webhook</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList">ValidatingWebhookConfigurationWebhookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhookInput">WebhookInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadata"></a>

```go
func Metadata() ValidatingWebhookConfigurationMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference">ValidatingWebhookConfigurationMetadataOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhook"></a>

```go
func Webhook() ValidatingWebhookConfigurationWebhookList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList">ValidatingWebhookConfigurationWebhookList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.metadataInput"></a>

```go
func MetadataInput() ValidatingWebhookConfigurationMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.webhookInput"></a>

```go
func WebhookInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ValidatingWebhookConfigurationConfig <a name="ValidatingWebhookConfigurationConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

&validatingwebhookconfiguration.ValidatingWebhookConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata,
	Webhook: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.webhook">Webhook</a></code> | <code>interface{}</code> | webhook block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#id ValidatingWebhookConfiguration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.metadata"></a>

```go
Metadata ValidatingWebhookConfigurationMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#metadata ValidatingWebhookConfiguration#metadata}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.webhook"></a>

```go
Webhook interface{}
```

- *Type:* interface{}

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#webhook ValidatingWebhookConfiguration#webhook}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#id ValidatingWebhookConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ValidatingWebhookConfigurationMetadata <a name="ValidatingWebhookConfigurationMetadata" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

&validatingwebhookconfiguration.ValidatingWebhookConfigurationMetadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the validating webhook configuration that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the validating webhook configuration. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.name">Name</a></code> | <code>*string</code> | Name of the validating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the validating webhook configuration that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#annotations ValidatingWebhookConfiguration#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#generate_name ValidatingWebhookConfiguration#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the validating webhook configuration.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#labels ValidatingWebhookConfiguration#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the validating webhook configuration, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

### ValidatingWebhookConfigurationWebhook <a name="ValidatingWebhookConfigurationWebhook" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

&validatingwebhookconfiguration.ValidatingWebhookConfigurationWebhook {
	ClientConfig: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig,
	Name: *string,
	AdmissionReviewVersions: *[]*string,
	FailurePolicy: *string,
	MatchPolicy: *string,
	NamespaceSelector: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector,
	ObjectSelector: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector,
	Rule: interface{},
	SideEffects: *string,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a></code> | client_config block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.name">Name</a></code> | <code>*string</code> | The name of the admission webhook. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.admissionReviewVersions">AdmissionReviewVersions</a></code> | <code>*[]*string</code> | AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.failurePolicy">FailurePolicy</a></code> | <code>*string</code> | FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.matchPolicy">MatchPolicy</a></code> | <code>*string</code> | matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent". |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a></code> | object_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.sideEffects">SideEffects</a></code> | <code>*string</code> | SideEffects states whether this webhook has side effects. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | TimeoutSeconds specifies the timeout for this webhook. |

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.clientConfig"></a>

```go
ClientConfig ValidatingWebhookConfigurationWebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

client_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#client_config ValidatingWebhookConfiguration#client_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the admission webhook.

Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

##### `AdmissionReviewVersions`<sup>Optional</sup> <a name="AdmissionReviewVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.admissionReviewVersions"></a>

```go
AdmissionReviewVersions *[]*string
```

- *Type:* *[]*string

AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects.

API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#admission_review_versions ValidatingWebhookConfiguration#admission_review_versions}

---

##### `FailurePolicy`<sup>Optional</sup> <a name="FailurePolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.failurePolicy"></a>

```go
FailurePolicy *string
```

- *Type:* *string

FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail.

Defaults to Fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#failure_policy ValidatingWebhookConfiguration#failure_policy}

---

##### `MatchPolicy`<sup>Optional</sup> <a name="MatchPolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.matchPolicy"></a>

```go
MatchPolicy *string
```

- *Type:* *string

matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

* Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
* Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_policy ValidatingWebhookConfiguration#match_policy}

---

##### `NamespaceSelector`<sup>Optional</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.namespaceSelector"></a>

```go
NamespaceSelector ValidatingWebhookConfigurationWebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#namespace_selector ValidatingWebhookConfiguration#namespace_selector}

---

##### `ObjectSelector`<sup>Optional</sup> <a name="ObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.objectSelector"></a>

```go
ObjectSelector ValidatingWebhookConfigurationWebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

object_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#object_selector ValidatingWebhookConfiguration#object_selector}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#rule ValidatingWebhookConfiguration#rule}

---

##### `SideEffects`<sup>Optional</sup> <a name="SideEffects" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.sideEffects"></a>

```go
SideEffects *string
```

- *Type:* *string

SideEffects states whether this webhook has side effects.

Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#side_effects ValidatingWebhookConfiguration#side_effects}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhook.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

TimeoutSeconds specifies the timeout for this webhook.

After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#timeout_seconds ValidatingWebhookConfiguration#timeout_seconds}

---

### ValidatingWebhookConfigurationWebhookClientConfig <a name="ValidatingWebhookConfigurationWebhookClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

&validatingwebhookconfiguration.ValidatingWebhookConfigurationWebhookClientConfig {
	CaBundle: *string,
	Service: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.caBundle">CaBundle</a></code> | <code>*string</code> | `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a></code> | service block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.url">Url</a></code> | <code>*string</code> | `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). |

---

##### `CaBundle`<sup>Optional</sup> <a name="CaBundle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.caBundle"></a>

```go
CaBundle *string
```

- *Type:* *string

`caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#ca_bundle ValidatingWebhookConfiguration#ca_bundle}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.service"></a>

```go
Service ValidatingWebhookConfigurationWebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#service ValidatingWebhookConfiguration#service}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

`url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`).

Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#url ValidatingWebhookConfiguration#url}

---

### ValidatingWebhookConfigurationWebhookClientConfigService <a name="ValidatingWebhookConfigurationWebhookClientConfigService" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

&validatingwebhookconfiguration.ValidatingWebhookConfigurationWebhookClientConfigService {
	Name: *string,
	Namespace: *string,
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.name">Name</a></code> | <code>*string</code> | `name` is the name of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.namespace">Namespace</a></code> | <code>*string</code> | `namespace` is the namespace of the service. Required. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.path">Path</a></code> | <code>*string</code> | `path` is an optional URL path which will be sent in any request to this service. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.port">Port</a></code> | <code>*f64</code> | If specified, the port on the service that hosting webhook. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.name"></a>

```go
Name *string
```

- *Type:* *string

`name` is the name of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#name ValidatingWebhookConfiguration#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

`namespace` is the namespace of the service. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#namespace ValidatingWebhookConfiguration#namespace}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.path"></a>

```go
Path *string
```

- *Type:* *string

`path` is an optional URL path which will be sent in any request to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#path ValidatingWebhookConfiguration#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

If specified, the port on the service that hosting webhook.

Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#port ValidatingWebhookConfiguration#port}

---

### ValidatingWebhookConfigurationWebhookNamespaceSelector <a name="ValidatingWebhookConfigurationWebhookNamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

&validatingwebhookconfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector {
	MatchExpressions: interface{},
	MatchLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions">MatchExpressions</a></code> | <code>interface{}</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchExpressions"></a>

```go
MatchExpressions interface{}
```

- *Type:* interface{}

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_expressions ValidatingWebhookConfiguration#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector.property.matchLabels"></a>

```go
MatchLabels *map[string]*string
```

- *Type:* *map[string]*string

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_labels ValidatingWebhookConfiguration#match_labels}

---

### ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

&validatingwebhookconfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key">Key</a></code> | <code>*string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator">Operator</a></code> | <code>*string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values">Values</a></code> | <code>*[]*string</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#key ValidatingWebhookConfiguration#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#operator ValidatingWebhookConfiguration#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#values ValidatingWebhookConfiguration#values}

---

### ValidatingWebhookConfigurationWebhookObjectSelector <a name="ValidatingWebhookConfigurationWebhookObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

&validatingwebhookconfiguration.ValidatingWebhookConfigurationWebhookObjectSelector {
	MatchExpressions: interface{},
	MatchLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions">MatchExpressions</a></code> | <code>interface{}</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchExpressions"></a>

```go
MatchExpressions interface{}
```

- *Type:* interface{}

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_expressions ValidatingWebhookConfiguration#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector.property.matchLabels"></a>

```go
MatchLabels *map[string]*string
```

- *Type:* *map[string]*string

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#match_labels ValidatingWebhookConfiguration#match_labels}

---

### ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions <a name="ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

&validatingwebhookconfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key">Key</a></code> | <code>*string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator">Operator</a></code> | <code>*string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values">Values</a></code> | <code>*[]*string</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#key ValidatingWebhookConfiguration#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#operator ValidatingWebhookConfiguration#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#values ValidatingWebhookConfiguration#values}

---

### ValidatingWebhookConfigurationWebhookRule <a name="ValidatingWebhookConfigurationWebhookRule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

&validatingwebhookconfiguration.ValidatingWebhookConfigurationWebhookRule {
	ApiGroups: *[]*string,
	ApiVersions: *[]*string,
	Operations: *[]*string,
	Resources: *[]*string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiGroups">ApiGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#api_groups ValidatingWebhookConfiguration#api_groups}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiVersions">ApiVersions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#api_versions ValidatingWebhookConfiguration#api_versions}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.operations">Operations</a></code> | <code>*[]*string</code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#resources ValidatingWebhookConfiguration#resources}. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#scope ValidatingWebhookConfiguration#scope}. |

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiGroups"></a>

```go
ApiGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#api_groups ValidatingWebhookConfiguration#api_groups}.

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.apiVersions"></a>

```go
ApiVersions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#api_versions ValidatingWebhookConfiguration#api_versions}.

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.operations"></a>

```go
Operations *[]*string
```

- *Type:* *[]*string

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#operations ValidatingWebhookConfiguration#operations}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#resources ValidatingWebhookConfiguration#resources}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRule.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/validating_webhook_configuration#scope ValidatingWebhookConfiguration#scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### ValidatingWebhookConfigurationMetadataOutputReference <a name="ValidatingWebhookConfigurationMetadataOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ValidatingWebhookConfigurationMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() ValidatingWebhookConfigurationMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationMetadata">ValidatingWebhookConfigurationMetadata</a>

---


### ValidatingWebhookConfigurationWebhookClientConfigOutputReference <a name="ValidatingWebhookConfigurationWebhookClientConfigOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookClientConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ValidatingWebhookConfigurationWebhookClientConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService">PutService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle">ResetCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutService` <a name="PutService" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService"></a>

```go
func PutService(value ValidatingWebhookConfigurationWebhookClientConfigService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.putService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `ResetCaBundle` <a name="ResetCaBundle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetCaBundle"></a>

```go
func ResetCaBundle()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference">ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput">CaBundleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle">CaBundle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.service"></a>

```go
func Service() ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference">ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference</a>

---

##### `CaBundleInput`<sup>Optional</sup> <a name="CaBundleInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundleInput"></a>

```go
func CaBundleInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() ValidatingWebhookConfigurationWebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `CaBundle`<sup>Required</sup> <a name="CaBundle" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.caBundle"></a>

```go
func CaBundle() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ValidatingWebhookConfigurationWebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

---


### ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference <a name="ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() ValidatingWebhookConfigurationWebhookClientConfigService
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigService">ValidatingWebhookConfigurationWebhookClientConfigService</a>

---


### ValidatingWebhookConfigurationWebhookList <a name="ValidatingWebhookConfigurationWebhookList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ValidatingWebhookConfigurationWebhookList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.get"></a>

```go
func Get(index *f64) ValidatingWebhookConfigurationWebhookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get"></a>

```go
func Get(index *f64) ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference <a name="ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions"></a>

```go
func PutMatchExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```go
func ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.resetMatchLabels"></a>

```go
func ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressions"></a>

```go
func MatchExpressions() ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookNamespaceSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```go
func MatchExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```go
func MatchLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.matchLabels"></a>

```go
func MatchLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ValidatingWebhookConfigurationWebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

---


### ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList <a name="ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get"></a>

```go
func Get(index *f64) ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference <a name="ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference <a name="ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookObjectSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions"></a>

```go
func PutMatchExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchExpressions"></a>

```go
func ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.resetMatchLabels"></a>

```go
func ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressions"></a>

```go
func MatchExpressions() ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList">ValidatingWebhookConfigurationWebhookObjectSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchExpressionsInput"></a>

```go
func MatchExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabelsInput"></a>

```go
func MatchLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.matchLabels"></a>

```go
func MatchLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ValidatingWebhookConfigurationWebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

---


### ValidatingWebhookConfigurationWebhookOutputReference <a name="ValidatingWebhookConfigurationWebhookOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ValidatingWebhookConfigurationWebhookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig">PutClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector">PutNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putObjectSelector">PutObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions">ResetAdmissionReviewVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy">ResetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy">ResetMatchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector">ResetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetObjectSelector">ResetObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetSideEffects">ResetSideEffects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfig` <a name="PutClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig"></a>

```go
func PutClientConfig(value ValidatingWebhookConfigurationWebhookClientConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putClientConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

---

##### `PutNamespaceSelector` <a name="PutNamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector"></a>

```go
func PutNamespaceSelector(value ValidatingWebhookConfigurationWebhookNamespaceSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `PutObjectSelector` <a name="PutObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putObjectSelector"></a>

```go
func PutObjectSelector(value ValidatingWebhookConfigurationWebhookObjectSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putObjectSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdmissionReviewVersions` <a name="ResetAdmissionReviewVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetAdmissionReviewVersions"></a>

```go
func ResetAdmissionReviewVersions()
```

##### `ResetFailurePolicy` <a name="ResetFailurePolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetFailurePolicy"></a>

```go
func ResetFailurePolicy()
```

##### `ResetMatchPolicy` <a name="ResetMatchPolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetMatchPolicy"></a>

```go
func ResetMatchPolicy()
```

##### `ResetNamespaceSelector` <a name="ResetNamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetNamespaceSelector"></a>

```go
func ResetNamespaceSelector()
```

##### `ResetObjectSelector` <a name="ResetObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetObjectSelector"></a>

```go
func ResetObjectSelector()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetRule"></a>

```go
func ResetRule()
```

##### `ResetSideEffects` <a name="ResetSideEffects" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetSideEffects"></a>

```go
func ResetSideEffects()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfig">ClientConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference">ValidatingWebhookConfigurationWebhookClientConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference">ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList">ValidatingWebhookConfigurationWebhookRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput">AdmissionReviewVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput">ClientConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput">MatchPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput">NamespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput">ObjectSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput">SideEffectsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions">AdmissionReviewVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicy">MatchPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffects">SideEffects</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientConfig`<sup>Required</sup> <a name="ClientConfig" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfig"></a>

```go
func ClientConfig() ValidatingWebhookConfigurationWebhookClientConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfigOutputReference">ValidatingWebhookConfigurationWebhookClientConfigOutputReference</a>

---

##### `NamespaceSelector`<sup>Required</sup> <a name="NamespaceSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelector"></a>

```go
func NamespaceSelector() ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference">ValidatingWebhookConfigurationWebhookNamespaceSelectorOutputReference</a>

---

##### `ObjectSelector`<sup>Required</sup> <a name="ObjectSelector" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelector"></a>

```go
func ObjectSelector() ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference">ValidatingWebhookConfigurationWebhookObjectSelectorOutputReference</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.rule"></a>

```go
func Rule() ValidatingWebhookConfigurationWebhookRuleList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList">ValidatingWebhookConfigurationWebhookRuleList</a>

---

##### `AdmissionReviewVersionsInput`<sup>Optional</sup> <a name="AdmissionReviewVersionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersionsInput"></a>

```go
func AdmissionReviewVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientConfigInput`<sup>Optional</sup> <a name="ClientConfigInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.clientConfigInput"></a>

```go
func ClientConfigInput() ValidatingWebhookConfigurationWebhookClientConfig
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookClientConfig">ValidatingWebhookConfigurationWebhookClientConfig</a>

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicyInput"></a>

```go
func FailurePolicyInput() *string
```

- *Type:* *string

---

##### `MatchPolicyInput`<sup>Optional</sup> <a name="MatchPolicyInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicyInput"></a>

```go
func MatchPolicyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceSelectorInput`<sup>Optional</sup> <a name="NamespaceSelectorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.namespaceSelectorInput"></a>

```go
func NamespaceSelectorInput() ValidatingWebhookConfigurationWebhookNamespaceSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookNamespaceSelector">ValidatingWebhookConfigurationWebhookNamespaceSelector</a>

---

##### `ObjectSelectorInput`<sup>Optional</sup> <a name="ObjectSelectorInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.objectSelectorInput"></a>

```go
func ObjectSelectorInput() ValidatingWebhookConfigurationWebhookObjectSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookObjectSelector">ValidatingWebhookConfigurationWebhookObjectSelector</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `SideEffectsInput`<sup>Optional</sup> <a name="SideEffectsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffectsInput"></a>

```go
func SideEffectsInput() *string
```

- *Type:* *string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `AdmissionReviewVersions`<sup>Required</sup> <a name="AdmissionReviewVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.admissionReviewVersions"></a>

```go
func AdmissionReviewVersions() *[]*string
```

- *Type:* *[]*string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.failurePolicy"></a>

```go
func FailurePolicy() *string
```

- *Type:* *string

---

##### `MatchPolicy`<sup>Required</sup> <a name="MatchPolicy" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.matchPolicy"></a>

```go
func MatchPolicy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SideEffects`<sup>Required</sup> <a name="SideEffects" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.sideEffects"></a>

```go
func SideEffects() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationWebhookRuleList <a name="ValidatingWebhookConfigurationWebhookRuleList" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ValidatingWebhookConfigurationWebhookRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.get"></a>

```go
func Get(index *f64) ValidatingWebhookConfigurationWebhookRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ValidatingWebhookConfigurationWebhookRuleOutputReference <a name="ValidatingWebhookConfigurationWebhookRuleOutputReference" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/validatingwebhookconfiguration"

validatingwebhookconfiguration.NewValidatingWebhookConfigurationWebhookRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ValidatingWebhookConfigurationWebhookRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput">ApiGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput">ApiVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput">OperationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups">ApiGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions">ApiVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operations">Operations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiGroupsInput`<sup>Optional</sup> <a name="ApiGroupsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroupsInput"></a>

```go
func ApiGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiVersionsInput`<sup>Optional</sup> <a name="ApiVersionsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersionsInput"></a>

```go
func ApiVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operationsInput"></a>

```go
func OperationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiGroups"></a>

```go
func ApiGroups() *[]*string
```

- *Type:* *[]*string

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.apiVersions"></a>

```go
func ApiVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.operations"></a>

```go
func Operations() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.validatingWebhookConfiguration.ValidatingWebhookConfigurationWebhookRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



